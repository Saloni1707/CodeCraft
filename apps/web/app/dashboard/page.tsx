"use client";

import { useEffect, useState } from "react";
import { ChallengeCard } from "../components/challengeCard";

type Challenge = {
  id: string;
  title: string;
  description: string;
  maxPoints: number;
  notionDocId: string;
};

type Contest = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  challenges: Challenge[];
};

export default function DashboardPage() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActiveContests = async () => {
      try {
        const response = await fetch("http://localhost:4000/contest/active");
        if (!response.ok) {
          throw new Error("Failed to fetch challenges");
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.contests)) {
          setContests(data.contests);
        }
      } catch (err) {
        console.error("Error fetching challenges:", err);
        setError("Failed to load challenges. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchActiveContests();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Flatten all challenges from all contests
  const allChallenges = contests.flatMap(contest => 
    contest.challenges?.map(challenge => ({
      ...challenge,
      contestTitle: contest.title,
      contestId: contest.id,
    })) || []
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12" aria-label="dashboard-title">
      <header className="mb-8 md:mb-10">
        <h1 id="dashboard-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Welcome 
        </h1>
        <p className="mt-2 text-muted-foreground">
          {allChallenges.length > 0 
            ? "Pick a challenge below to get started."
            : "No active challenges available. Please check back later."}
        </p>
      </header>
      
      {allChallenges.length > 0 && (
        <section aria-label="Challenges">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allChallenges.map((challenge) => (
              <ChallengeCard 
                key={`${challenge.contestId}-${challenge.id}`}
                id={challenge.id}
                name={challenge.title}
                description={`Contest: ${challenge.contestTitle}`}
                maxPoints={challenge.maxPoints}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
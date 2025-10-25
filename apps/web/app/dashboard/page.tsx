"use client";

import { useEffect, useState } from "react";
import { ChallengeCard } from "../components/challengeCard";
import { format } from "date-fns";

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
    const fetchContests = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        console.log('Fetching from:', `${apiUrl}/challenges`);
        
        const response = await fetch(`${apiUrl}/challenges`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('API Error Response:', errorData);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.contests && Array.isArray(data.contests)) {
          setContests(data.contests);
        } else {
          console.warn('Unexpected API response format:', data);
          setError('Received unexpected data format from server');
        }
      } catch (err) {
        console.error("Error fetching challenges:", err);
        setError(`Failed to load challenges: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
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

  // Group challenges by contest
  const challengesByContest = contests.reduce<Record<string, Challenge[]>>((acc, contest) => {
    if (contest.challenges?.length) {
      acc[contest.title] = contest.challenges;
    }
    return acc;
  }, {});

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12" aria-label="dashboard-title">
      <header className="mb-8 md:mb-10">
        <h1 id="dashboard-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Coding Challenges
        </h1>
        <p className="mt-2 text-muted-foreground">
          {allChallenges.length > 0 
            ? `Showing ${allChallenges.length} challenge${allChallenges.length !== 1 ? 's' : ''} across ${Object.keys(challengesByContest).length} contest${Object.keys(challengesByContest).length !== 1 ? 's' : ''}`
            : "No challenges available. Please check back later."}
        </p>
      </header>
      
      {Object.entries(challengesByContest).map(([contestTitle, challenges]) => (
        <section key={contestTitle} className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{contestTitle}</h2>
            <span className="text-sm text-muted-foreground">
              {challenges.length} challenge{challenges.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <ChallengeCard 
                key={challenge.id}
                id={challenge.id}
                name={challenge.title}
                description={challenge.description}
                maxPoints={challenge.maxPoints}
                className="h-full"
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
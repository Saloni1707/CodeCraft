'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Contest = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  challenges: Array<{ id: string; title: string }>;
};

export default function AdminDashboard() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('/api/contests');
        if (!response.ok) {
          throw new Error('Failed to fetch contests');
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.contests)) {
          setContests(data.contests);
        } else {
          // Handle case where data is not in expected format
          console.error('Unexpected response format:', data);
          setError('Unexpected response format from server');
        }
      } catch (err) {
        console.error('Error fetching contests:', err);
        setError('Failed to load contests. Please check your connection and try again.');
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
        <Button onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage contests and challenges</p>
          </div>
          <Button asChild>
            <Link href="/admin/contests/new">Create New Contest</Link>
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Active Contests</h2>
        {contests.length === 0 ? (
          <div className="text-center py-8 border rounded-lg">
            <p className="text-muted-foreground">No active contests found.</p>
            <Button asChild variant="link" className="mt-2">
              <Link href="/admin/contests/new">Create your first contest</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {contests.map((contest) => (
              <Card key={contest.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{contest.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {new Date(contest.startTime).toLocaleDateString()} - {new Date(contest.endTime).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {contest.challenges?.length || 0} {contest.challenges?.length === 1 ? 'Challenge' : 'Challenges'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-sm font-medium mb-2">Challenges:</h3>
                  {contest.challenges?.length > 0 ? (
                    <ul className="space-y-2">
                      {contest.challenges.map(challenge => (
                        <li key={challenge.id} className="flex justify-between items-center py-1">
                          <span className="text-sm">{challenge.title}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">No challenges yet</p>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/contests/${contest.id}`}>View Details</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/admin/challenges/new?contestId=${contest.id}`}>
                      Add Challenge
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

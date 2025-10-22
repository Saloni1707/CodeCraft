'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

export default function CreateChallenge() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contestId = searchParams.get('contestId') || '';
  
  const [formData, setFormData] = useState({
    title: '',
    notionDocId: '',
    maxPoints: 100, // Default points
    contestId: contestId
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (contestId && contestId !== formData.contestId) {
      setFormData(prev => ({
        ...prev,
        contestId
      }));
    }
  }, [contestId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      
      if (!token) {
        router.push('/login?redirect=/admin/challenges/new?contestId=' + contestId);
        return;
      }

      const response = await fetch(`/api/admin/contest/${formData.contestId}/challenge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: formData.title,
          notionDocId: formData.notionDocId,
          maxPoints: Number(formData.maxPoints)
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create challenge');
      }
      
      // Show success message and redirect
      alert('Challenge created successfully!');
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error creating challenge:', error);
      setError(error instanceof Error ? error.message : 'Failed to create challenge. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state while checking auth and contest ID
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Check authentication on client side
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push(`/login?redirect=/admin/challenges/new?contestId=${contestId}`);
      return;
    }
  }, [contestId, router]);
  
  // Show loading state until client-side checks are complete
  if (!isClient) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show error if no contest ID is provided
  if (!contestId) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Missing Contest ID</h1>
          <p className="text-muted-foreground mb-6">
            Please navigate to this page from a contest to create a challenge.
          </p>
          <Button onClick={() => router.push('/admin/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Challenge</h1>
        <p className="text-muted-foreground mt-2">
          Adding challenge to contest: <span className="font-medium text-foreground">{contestId}</span>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Challenge Details</CardTitle>
          <CardDescription>Fill in the challenge information below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Contest ID</Label>
              <div className="px-3 py-2 border rounded-md bg-muted/50">
                <p className="text-sm font-mono">{contestId}</p>
                <input type="hidden" name="contestId" value={contestId} />
              </div>
              <p className="text-sm text-muted-foreground">
                This challenge will be added to the selected contest
              </p>
              {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Challenge Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Responsive Layout Challenge"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notionDocId">Notion Document ID</Label>
              <Input
                id="notionDocId"
                name="notionDocId"
                value={formData.notionDocId}
                onChange={handleChange}
                placeholder="Enter Notion document ID"
                required
              />
              <p className="text-sm text-muted-foreground">
                The ID of the Notion document containing the challenge details
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxPoints">Maximum Points</Label>
              <Input
                id="maxPoints"
                name="maxPoints"
                type="number"
                value={formData.maxPoints}
                onChange={handleChange}
                min="1"
                max="1000"
                required
              />
              <p className="text-sm text-muted-foreground">
                Maximum points that can be earned for this challenge (10-100)
              </p>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/admin/dashboard')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Challenge'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

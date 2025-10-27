'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Calendar, Clock, ArrowLeft, AlertCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export interface Contest {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
}

export default function ContestsPage() {
  const router = useRouter();
  const [contests, setContests] = useState<Contest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [contestToDelete, setContestToDelete] = useState<Contest | null>(null);
  const [newContest, setNewContest] = useState({
    title: '',
    startTime: '',
    endTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login?redirect=/admin/contests');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/active`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contests');
      }

      const data = await response.json();
      setContests(data.contests || []);
    } catch (error) {
      console.error('Error fetching contests:', error);
      setError('Failed to load contests. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateContest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login?redirect=/admin/contests');
        return;
      }

      const formattedContest = {
        ...newContest,
        startTime: new Date(newContest.startTime).toISOString(),
        endTime: new Date(newContest.endTime).toISOString()
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/contest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedContest)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create contest');
      }

      await fetchContests();
      setIsCreateDialogOpen(false);
      setNewContest({ title: '', startTime: '', endTime: '' });
      setError(null);
    } catch (error) {
      console.error('Error creating contest:', error);
      setError(error instanceof Error ? error.message : 'Failed to create contest');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteContest = async () => {
    if (!contestToDelete) return;
    
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login?redirect=/admin/contests');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/contest/${contestToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete contest');
      }

      await fetchContests();
      setIsDeleteDialogOpen(false);
      setContestToDelete(null);
      setError(null);
    } catch (error) {
      console.error('Error deleting contest:', error);
      setError(error instanceof Error ? error.message : 'Failed to delete contest');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContestStatus = (startTime: string, endTime: string) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now < start) {
      return { label: 'Upcoming', variant: 'default' as const };
    } else if (now >= start && now <= end) {
      return { label: 'Active', variant: 'default' as const };
    } else {
      return { label: 'Ended', variant: 'secondary' as const };
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PPpp');
    } catch (e) {
      return 'Invalid date';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/admin/dashboard')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Contest Management</h1>
          <p className="text-muted-foreground mt-1">Create and manage coding contests</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create New Contest
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Contest</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new coding contest.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateContest}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Contest Title</Label>
                  <Input
                    id="title"
                    value={newContest.title}
                    onChange={(e) => setNewContest({...newContest, title: e.target.value})}
                    placeholder="e.g., Weekly Coding Challenge #1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startTime" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    type="datetime-local"
                    value={newContest.startTime}
                    onChange={(e) => setNewContest({...newContest, startTime: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    type="datetime-local"
                    value={newContest.endTime}
                    onChange={(e) => setNewContest({...newContest, endTime: e.target.value})}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating...' : 'Create Contest'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Contests</CardTitle>
          <CardDescription>
            {contests.length === 0 
              ? 'No contests created yet' 
              : `Showing ${contests.length} contest${contests.length !== 1 ? 's' : ''}`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {contests.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">
                No contests found. Create your first contest to get started.
              </p>
              <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                Create First Contest
              </Button>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>End Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contests.map((contest) => {
                    const status = getContestStatus(contest.startTime, contest.endTime);
                    return (
                      <TableRow key={contest.id}>
                        <TableCell className="font-medium">{contest.title}</TableCell>
                        <TableCell>
                          <Badge variant={status.variant}>{status.label}</Badge>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            {formatDate(contest.startTime)}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {formatDate(contest.endTime)}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => router.push(`/admin/challenges/new?contestId=${contest.id}`)}
                              className="gap-2"
                            >
                              <Plus className="h-4 w-4" />
                              Add Challenge
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => {
                                setContestToDelete(contest);
                                setIsDeleteDialogOpen(true);
                              }}
                              className="gap-2 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
      {/* delete dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Contest</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{contestToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsDeleteDialogOpen(false);
                setContestToDelete(null);
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteContest}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Deleting...' : 'Delete Contest'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Trophy, FileCode, Users, Clock, Target, TrendingUp, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalContests: 0,
    activeChallenges: 0,
    totalUsers: 0,
    loading: true
  });

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (!token) {
      router.push('/login?redirect=/admin/dashboard');
      return;
    }

    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        // Add your API calls here to fetch real stats
        // For now, using mock data
        setStats({
          totalContests: 3,
          activeChallenges: 12,
          totalUsers: 45,
          loading: false
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      router.push('/login');
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header with logout */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage your coding contests and challenges</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </header>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contests</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.loading ? '...' : stats.totalContests}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Active and completed contests
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.loading ? '...' : stats.activeChallenges}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.loading ? '...' : stats.totalUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Registered participants
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/admin/contests/new">
              <Trophy className="mr-2 h-4 w-4" />
              Create Contest
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/contests">
              <FileCode className="mr-2 h-4 w-4" />
              Add Challenge
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/submissions">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Submissions
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Management Cards */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Management</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Contests</CardTitle>
              </div>
              <CardDescription>Create and manage coding contests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Set custom timeframes
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Assign challenges
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Track participation
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/admin/contests">Manage Contests</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Challenges</CardTitle>
              </div>
              <CardDescription>Create and manage coding challenges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  Create new challenges
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Set difficulty levels
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Define test cases
                </li>
              </ul>
              <Button asChild variant="default" className="w-full">
                <Link href="/admin/contests">Select Contest</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-muted rounded-lg">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>Users</CardTitle>
              </div>
              <CardDescription>View and manage user activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  View participants
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Track submissions
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Review leaderboards
                </li>
              </ul>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity Section (Optional) */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center py-4">
              Activity tracking coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
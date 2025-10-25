'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage challenges and user activities</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Challenges</CardTitle>
            <CardDescription>Manage coding challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/challenges/new">Create New Challenge</Link>
            </Button>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>View and manage users</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>
              View Users (Coming Soon)
            </Button>
          </CardContent>
        </Card> */}
      </div>
    </main>
  );
}

import Link from "next/link";
import { Bell, Edit3, FileText, PlusCircle, Star, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainHeader } from "@/components/menus/main-header";

const recentNotes = [
  {
    id: 1,
    title: "Project Kickoff Meeting",
    category: "Work",
    updatedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Grocery List",
    category: "Personal",
    updatedAt: "Yesterday",
  },
  {
    id: 3,
    title: "Book Recommendations",
    category: "Ideas",
    updatedAt: "3 days ago",
  },
];

const pinnedNotes = [
  { id: 4, title: "2023 Goals", category: "Personal", updatedAt: "1 week ago" },
  {
    id: 5,
    title: "Client Presentation",
    category: "Work",
    updatedAt: "2 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Note
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button variant="outline" className="justify-start">
                  <Edit3 className="mr-2 h-4 w-4" />
                  Create Note
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Notes
                </Button>
                <Button variant="outline" className="justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Check Notifications
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recentNotes.map((note) => (
                    <li
                      key={note.id}
                      className="flex items-center justify-between">
                      <div>
                        <Link
                          href={`/notes/${note.id}`}
                          className="font-medium hover:underline">
                          {note.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {note.category}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {note.updatedAt}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Notes
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pinned Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pinnedNotes.map((note) => (
                    <li
                      key={note.id}
                      className="flex items-center justify-between">
                      <div>
                        <Link
                          href={`/notes/${note.id}`}
                          className="font-medium hover:underline">
                          {note.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {note.category}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Star className="h-4 w-4 text-yellow-400" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Manage Pinned Notes
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Note Statistics</CardTitle>
              <CardDescription>
                Overview of your note-taking activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center space-y-1 rounded-lg border p-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">42</span>
                  <span className="text-sm text-muted-foreground">
                    Total Notes
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 rounded-lg border p-4">
                  <Edit3 className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-sm text-muted-foreground">
                    Notes This Week
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 rounded-lg border p-4">
                  <Trash2 className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">3</span>
                  <span className="text-sm text-muted-foreground">
                    Deleted Notes
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

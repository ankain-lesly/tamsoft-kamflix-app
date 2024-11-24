import {
  CalendarDays,
  FolderOpen,
  PenSquare,
  Star,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainHeader } from "@/components/menus/main-header";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">
                Here&apos;s an overview of your notes
              </p>
            </div>
            <Button>
              <PenSquare className="mr-2 h-4 w-4" />
              New Note
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Notes
                </CardTitle>
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">
                  +4 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Collaborations
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 new this week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Starred Notes
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  3 added this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Activity
                </CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">
                  Edits in the last 7 days
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
                <CardDescription>Your recently edited notes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Project Brainstorm",
                    "Meeting Minutes",
                    "Ideas for Blog Post",
                    "To-Do List",
                    "Book Notes",
                  ].map((note, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between">
                      <span>{note}</span>
                      <span className="text-sm text-muted-foreground">
                        {index + 1}d ago
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Reminders</CardTitle>
                <CardDescription>Notes with upcoming deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Team Review",
                    "Client Presentation",
                    "Project Deadline",
                    "Follow-up Meeting",
                    "Research Summary",
                  ].map((reminder, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between">
                      <span>{reminder}</span>
                      <span className="text-sm text-muted-foreground">
                        In {index + 1} day{index !== 0 ? "s" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

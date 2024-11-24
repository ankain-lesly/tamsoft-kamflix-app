import { Archive, ChevronDown, Filter, PenSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { MainHeader } from "@/components/menus/main-header";

const archivedNotes = [
  {
    id: 1,
    title: "Old Project Ideas",
    excerpt: "Brainstorming session from last year's team retreat...",
    category: "Work",
    archivedDate: "3 months ago",
  },
  {
    id: 2,
    title: "Travel Plans 2022",
    excerpt: "Itinerary and budget for family vacation...",
    category: "Personal",
    archivedDate: "6 months ago",
  },
  {
    id: 3,
    title: "Book Notes: Leadership 101",
    excerpt: "Key takeaways from the leadership seminar...",
    category: "Learning",
    archivedDate: "1 year ago",
  },
  // Add more archived notes as needed
];

export default function ArchivePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Archived Notes</h1>
              <p className="text-muted-foreground">
                Access and manage your archived content
              </p>
            </div>
            <Button>
              <PenSquare className="mr-2 h-4 w-4" />
              New Note
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Input
              placeholder="Search archived notes..."
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Most Recent</DropdownMenuItem>
                <DropdownMenuItem>Oldest First</DropdownMenuItem>
                <DropdownMenuItem>By Category</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivedNotes.map((note) => (
              <Card key={note.id}>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>{note.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {note.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Archived {note.archivedDate}
                  </p>
                  <Button variant="ghost" size="sm">
                    <Archive className="mr-2 h-4 w-4" />
                    Unarchive
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

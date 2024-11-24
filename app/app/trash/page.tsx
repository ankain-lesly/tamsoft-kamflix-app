import { ChevronDown, Filter, RefreshCcw, Trash2 } from "lucide-react";

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

const deletedNotes = [
  {
    id: 1,
    title: "Outdated Meeting Minutes",
    excerpt: "Notes from the project kickoff meeting...",
    category: "Work",
    deletedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Old Shopping List",
    excerpt: "Groceries for last week's dinner party...",
    category: "Personal",
    deletedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Duplicate Recipe",
    excerpt: "Extra copy of chocolate chip cookie recipe...",
    category: "Recipes",
    deletedDate: "3 weeks ago",
  },
  // Add more deleted notes as needed
];

export default function TrashPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Trash</h1>
              <p className="text-muted-foreground">Manage your deleted notes</p>
            </div>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Empty Trash
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Input placeholder="Search deleted notes..." className="max-w-sm" />
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
            {deletedNotes.map((note) => (
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
                    Deleted {note.deletedDate}
                  </p>
                  <div className="space-x-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Restore
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Permanently
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

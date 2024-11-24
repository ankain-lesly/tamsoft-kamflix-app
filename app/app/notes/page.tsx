"use client";

import { useState } from "react";
import { ChevronDown, Filter, MoreVertical, Plus } from "lucide-react";

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
import { MainHeader } from "@/components/menus/main-header";

const categories = [
  "All Notes",
  "Personal",
  "Work",
  "Projects",
  "Ideas",
  "Archive",
];

const notes = [
  {
    id: 1,
    title: "Project Brainstorm",
    category: "Work",
    excerpt: "Initial thoughts and ideas for the new project...",
    collaborators: 3,
    lastUpdated: "2h ago",
  },
  {
    id: 2,
    title: "Meeting Notes",
    category: "Work",
    excerpt: "Key points from today's team meeting...",
    collaborators: 5,
    lastUpdated: "4h ago",
  },
  // Add more notes as needed
];

export default function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Notes");

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Notes</h1>
            <p className="text-muted-foreground">
              Manage and organize your notes
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Note
          </Button>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Most Recent</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
              <DropdownMenuItem>Alphabetical</DropdownMenuItem>
              <DropdownMenuItem>Most Collaborated</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{note.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Move</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription>{note.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {note.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                <div>{note.collaborators} collaborators</div>
                <div>Updated {note.lastUpdated}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

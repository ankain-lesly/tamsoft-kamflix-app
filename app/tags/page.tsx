import { Hash, Plus, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MainHeader } from "@/components/menus/main-header";

const tags = [
  { name: "Work", count: 45 },
  { name: "Personal", count: 32 },
  { name: "Ideas", count: 28 },
  { name: "To-Do", count: 20 },
  { name: "Learning", count: 15 },
  { name: "Projects", count: 12 },
  { name: "Goals", count: 10 },
  { name: "Inspiration", count: 8 },
  { name: "Recipes", count: 6 },
  { name: "Travel", count: 5 },
  // Add more tags as needed
];

export default function TagsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Tags</h1>
              <p className="text-muted-foreground">
                Manage and organize your note tags
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Tag
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create Tag</CardTitle>
              <CardDescription>
                Add a new tag to organize your notes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex items-end space-x-2">
                <div className="flex-1 space-y-2">
                  <label htmlFor="tagName" className="text-sm font-medium">
                    Tag Name
                  </label>
                  <Input id="tagName" placeholder="Enter tag name" />
                </div>
                <Button type="submit">Create Tag</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Tags</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tags.map((tag) => (
                <Card key={tag.name}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Tag className="h-4 w-4" />
                        <span>{tag.name}</span>
                      </div>
                    </CardTitle>
                    <Hash className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{tag.count}</div>
                    <p className="text-xs text-muted-foreground">
                      {tag.count === 1 ? "Note" : "Notes"}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Notes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Send, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";

const collaborators = [
  { name: "Alice", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Bob", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Charlie", avatar: "/placeholder.svg?height=32&width=32" },
];

export default function WorkspacePage() {
  const [comments, setComments] = useState([
    {
      user: "Alice",
      text: "Great idea! Let's expand on this.",
      time: "2 hours ago",
    },
    {
      user: "Bob",
      text: "I think we should consider the impact on the timeline.",
      time: "1 hour ago",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { user: "You", text: newComment, time: "Just now" },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Collaborative Workspace</h1>
              <p className="text-muted-foreground">
                Work together in real-time
              </p>
            </div>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Invite
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Brainstorm</CardTitle>
                  <CardDescription>
                    Collaborative note for team ideas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    className="min-h-[300px]"
                    placeholder="Start typing your collaborative note here..."
                    defaultValue="Our team project aims to revolutionize how people collaborate on ideas. We should focus on the following key areas:

1. Real-time collaboration
2. Version control
3. Integration with existing tools
4. AI-powered suggestions

Next steps:
- Research competitors
- Create a product roadmap
- Design initial mockups"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                  <CardDescription>
                    Discuss ideas with your team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {comments.map((comment, index) => (
                      <li key={index} className="flex space-x-4">
                        <Avatar>
                          <AvatarFallback>{comment.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {comment.user}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {comment.text}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {comment.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <form
                    className="flex w-full items-center space-x-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      addComment();
                    }}>
                    <Input
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button type="submit">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Collaborators</CardTitle>
                  <CardDescription>People working on this note</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {collaborators.map((collaborator, index) => (
                      <li key={index} className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={collaborator.avatar}
                            alt={collaborator.name}
                          />
                          <AvatarFallback>
                            {collaborator.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            {collaborator.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Online
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Feed</CardTitle>
                  <CardDescription>Recent actions on this note</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Alice edited the note (5 minutes ago)</li>
                    <li>Bob added a comment (10 minutes ago)</li>
                    <li>Charlie joined the workspace (15 minutes ago)</li>
                    <li>You created the note (1 hour ago)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

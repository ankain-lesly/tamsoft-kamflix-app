"use client";

import { useState } from "react";
import { ArrowLeft, Globe, Lock, Share2, Upload, Users } from "lucide-react";

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
import { Label } from "@/components/ui/label";
import { MainHeader } from "@/components/menus/main-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CreateNotePage() {
  const [visibility, setVisibility] = useState("private");

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Go back</span>
              </Button>
              <h1 className="text-3xl font-bold">Create New Note</h1>
            </div>
            <Button>Save Note</Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Note Details</CardTitle>
                  <CardDescription>
                    Enter the details of your new note
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter note title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="ideas">Ideas</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Start typing your note..."
                      className="min-h-[200px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uploaded Files</CardTitle>
                  <CardDescription>
                    Manage files attached to this note
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Placeholder for uploaded files */}
                    <div className="flex items-center justify-center h-32 rounded-lg border-2 border-dashed">
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload File
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Note Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Visibility</Label>
                    <Select
                      value={visibility}
                      onValueChange={(value) => setVisibility(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">
                          <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4" />
                            Private
                          </div>
                        </SelectItem>
                        <SelectItem value="shared">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Shared
                          </div>
                        </SelectItem>
                        <SelectItem value="public">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Public
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {visibility === "shared" && (
                    <div className="space-y-2">
                      <Label htmlFor="collaborators">Collaborators</Label>
                      <Input
                        id="collaborators"
                        placeholder="Enter email addresses"
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Invite Collaborators
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>
                    Add tags to categorize your note
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Input placeholder="Add tags separated by commas" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

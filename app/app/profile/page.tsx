"use client";

import { useState } from "react";
import { Camera, Pencil } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Your Profile</h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Manage your personal information and preferences
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </div>
              <CardDescription>
                Update your profile information and manage your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile picture"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full max-w-[200px]">
                  <Camera className="mr-2 h-4 w-4" />
                  Change Picture
                </Button>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={!isEditing}>
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt>Total Notes</dt>
                    <dd className="font-medium">42</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Collaborations</dt>
                    <dd className="font-medium">15</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Account Created</dt>
                    <dd className="font-medium">Jan 1, 2023</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Google</span>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>GitHub</span>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Microsoft</span>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

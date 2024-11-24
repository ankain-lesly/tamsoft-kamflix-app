import { Github, Globe, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainHeader } from "@/components/menus/main-header";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Noteledia</h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Empowering collaboration and organization in the digital age
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Noteledia, we believe in the power of collaborative thinking
                and organized ideas. Our mission is to provide a seamless
                platform where individuals and teams can capture, develop, and
                share their thoughts, transforming them into actionable insights
                and innovative solutions.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Real-time collaboration</li>
                  <li>Smart organization with categories and tags</li>
                  <li>Powerful search capabilities</li>
                  <li>Cross-platform synchronization</li>
                  <li>Customizable workspaces</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Noteledia is built by a passionate team of developers,
                  designers, and productivity enthusiasts. We&apos;re committed
                  to creating tools that enhance creativity, boost productivity,
                  and foster collaboration.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Join Our Community</CardTitle>
              <CardDescription>
                Connect with us and stay updated on the latest features and tips
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

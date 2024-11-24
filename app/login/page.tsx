import Link from "next/link";
import { ArrowRight, Film } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Background Image */}
      <div className="hidden w-1/2 bg-gradient-to-br from-violet-600 to-indigo-600 lg:block">
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        /> */}
        <div className="relative h-full flex items-center p-12 gap-2">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Film className="h-6 w-6" />
              <span className="text-lg text-danger md:text-xl font-bold">
                Kamflix
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-white">
              Welcome to Kamflix
            </h2>
            <p className="mt-4 text-lg text-white/90">
              We provide the best movie and tv show streaming experiences across
              the globe. From movie producer to seasoned movie lovers
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <Card className="mx-8 w-full max-w-md border-none shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" size="lg">
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

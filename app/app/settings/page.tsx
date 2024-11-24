import {
  Bell,
  ChevronRight,
  Globe,
  Key,
  Lock,
  Mail,
  Palette,
  Shield,
  User,
  Users,
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

const settingsGroups = [
  {
    title: "Account",
    description: "Manage your account settings and preferences",
    items: [
      {
        icon: User,
        label: "Personal Information",
        description: "Update your personal details and profile",
      },
      {
        icon: Mail,
        label: "Email Settings",
        description: "Manage your email preferences and notifications",
      },
      {
        icon: Key,
        label: "Password & Security",
        description: "Update your password and security settings",
      },
    ],
  },
  {
    title: "Preferences",
    description: "Customize your experience",
    items: [
      {
        icon: Palette,
        label: "Appearance",
        description: "Customize the look and feel of your workspace",
      },
      {
        icon: Bell,
        label: "Notifications",
        description: "Configure how you receive notifications",
      },
      {
        icon: Globe,
        label: "Language & Region",
        description: "Set your preferred language and regional settings",
      },
    ],
  },
  {
    title: "Privacy & Security",
    description: "Manage your privacy and security settings",
    items: [
      {
        icon: Lock,
        label: "Privacy Settings",
        description: "Control who can see your content",
      },
      {
        icon: Shield,
        label: "Security Settings",
        description: "Manage your account security preferences",
      },
      {
        icon: Users,
        label: "Connected Accounts",
        description: "Manage your connected accounts and services",
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 space-y-8 p-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="space-y-8">
          {settingsGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div
                className="grid gap-4 m
:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <Card key={item.label} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <item.icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{item.label}</CardTitle>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        className="absolute inset-0 h-full w-full justify-end rounded-none p-6">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

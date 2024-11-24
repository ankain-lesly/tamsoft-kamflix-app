import { Check, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainHeader } from "@/components/menus/main-header";

const features = [
  "Unlimited note storage",
  "Advanced collaboration tools",
  "Priority customer support",
  "Offline access on mobile devices",
  "Custom themes and branding",
  "Advanced search and filtering",
  "Version history and restore",
  "Integration with third-party apps",
  "AI-powered note suggestions",
  "Enhanced security features",
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "For individual note-takers",
    features: ["Up to 100 notes", "Basic collaboration", "5GB storage"],
  },
  {
    name: "Pro",
    price: "$9.99/month",
    description: "For power users and small teams",
    features: [
      "Unlimited notes",
      "Advanced collaboration",
      "50GB storage",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    description: "For large organizations",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
    ],
  },
];

export default function PremiumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Upgrade to Noteledia Premium</h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Unlock advanced features and take your note-taking to the next
              level
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">{plan.price}</div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.name === "Pro" ? "default" : "outline"}>
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Premium Features
              </CardTitle>
              <CardDescription>
                Enhance your note-taking experience with these powerful features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground">
              Have questions about our premium features? Check out our FAQ or
              contact support.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button variant="outline">View FAQ</Button>
              <Button>Contact Support</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

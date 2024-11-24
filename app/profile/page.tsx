// import { getCurrentUser } from '@/lib/session'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ProfilePage() {
  // const user = await getCurrentUser()
  const user: any = null;

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Please log in to view your profile.</p>
        <Button asChild className="mt-4">
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="flex items-center gap-4 mb-6">
        <Avatar>
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <div className="space-y-4">
        <Button asChild>
          <Link href="/profile/edit">Edit Profile</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/profile/preferences">Manage Preferences</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/profile/activity">View Activity</Link>
        </Button>
      </div>
    </div>
  );
}

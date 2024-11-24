import Link from 'next/link'
import { Button } from "@/components/ui/button"

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Watch Movies of 2023",
    excerpt: "Discover the best films that have graced the silver screen this year...",
    date: "2023-06-15",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "The Evolution of Superhero Movies",
    excerpt: "From early comic book adaptations to modern blockbusters, we explore the journey...",
    date: "2023-06-10",
    author: "John Smith"
  },
  {
    id: 3,
    title: "Behind the Scenes: Making of 'The Space Between Worlds'",
    excerpt: "Get an exclusive look at the production of this year's biggest sci-fi hit...",
    date: "2023-06-05",
    author: "Alice Johnson"
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movie News & Articles</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                By {post.author} on {post.date}
              </span>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


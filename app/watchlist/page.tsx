// import { getCurrentUser } from '@/lib/session'
// import { getUserWatchlist } from '@/lib/watchlist'
import { movieList } from "@/api/data-movie-library";
import { MovieCardBig } from "@/components/cards/movie-card";
import { Section } from "@/components/wrappers/section";

export default function WatchlistPage() {
  // const user = await getCurrentUser()
  // const watchlist = user ? await getUserWatchlist(user.id) : []

  return (
    <Section className="">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
      {movieList.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movieList.map((film, i) => (
            <MovieCardBig {...film} key={i} />
          ))}
        </div>
      ) : (
        <p>Your watchlist is empty. Start adding movies you want to watch!</p>
      )}
    </Section>
  );
}

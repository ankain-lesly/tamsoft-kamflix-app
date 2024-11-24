'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MovieList from '@/components/movie-list'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    // This is a placeholder implementation
    const res = await fetch(`/api/search?q=${query}`)
    const data = await res.json()
    setResults(data)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Movies</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search by title, genre, or actor"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <MovieList movies={results} />
    </div>
  )
}


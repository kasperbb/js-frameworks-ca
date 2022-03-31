import { useEffect, useRef, useState } from 'react'

import { API_KEY } from '@constants/api'

export function usePagination<T>(query: string, pageNumber: number, initialValue?: T[]) {
  const [games, setGames] = useState<T[]>(initialValue ?? [])
  const [loading, setLoading] = useState(false)

  const initialPage = useRef(pageNumber)

  useEffect(() => {
    if (pageNumber === initialPage.current) return
    ;(async () => {
      setLoading(true)
      const res = await fetch(`${query}?key=${API_KEY}&page=${pageNumber}`)
      const { results }: { results: T[] } = await res.json()
      setGames(prev => {
        return [...prev, ...results]
      })
      setLoading(false)
    })()
  }, [query, pageNumber])

  return [games, loading] as const
}

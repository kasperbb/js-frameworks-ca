import { Button, Container, Grid, Heading } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import { API } from '@interfaces/api'
import { API_KEY } from '@constants/api'
import { Game } from '@components/Game'
import { usePagination } from '@hooks/usePagination'
import { useState } from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
  const { results } = await res.json()
  return {
    props: { results },
  }
}

const Home: NextPage<{ results: API.Game[] }> = ({ results }) => {
  const [page, setPage] = useState(1)
  const [games, loading] = usePagination('https://api.rawg.io/api/games', page, results)

  return (
    <Container maxW="8xl" py={12}>
      <Heading as="h1" mb={6} fontSize="4xl">
        Games
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
        {games.map(game => (
          <Game key={game.id} {...game} />
        ))}
      </Grid>
      <Button width="full" variant="outline" mt={10} isLoading={loading} onClick={() => setPage(prev => prev + 1)}>
        Load More
      </Button>
    </Container>
  )
}

export default Home

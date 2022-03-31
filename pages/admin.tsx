import { Box, Heading } from '@chakra-ui/react'

import { useAuth } from '@context/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Admin() {
  const { session } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!session.length) router.replace('/login')
  }, [router, session.length])

  if (!session) return null

  return (
    <Box>
      <Heading as="h1">Welcome to the admin page</Heading>
    </Box>
  )
}

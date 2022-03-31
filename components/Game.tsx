import { Box, Flex, Image, chakra, useColorModeValue } from '@chakra-ui/react'

import { API } from '@interfaces/api'
import NextLink from 'next/link'

export function Game({ name, background_image, added, slug, tags }: API.Game) {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} shadow="lg" rounded="lg" overflow="hidden">
      <Image w="full" h={56} fit="cover" objectPosition="center" src={background_image} alt="avatar" />

      <Flex alignItems="center" px={4} py={2} bg="gray.900">
        <chakra.h2 color="white" fontWeight="bold" fontSize="lg">
          🔥 {added}
        </chakra.h2>
      </Flex>

      <Box p={4}>
        <chakra.h1 title={name} fontSize="xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
          <NextLink href={'/detail/' + slug} passHref>
            {name}
          </NextLink>
        </chakra.h1>

        <chakra.p py={2} color={useColorModeValue('gray.700', 'gray.400')} lineHeight={1.7} noOfLines={2}>
          {tags.map(tag => tag.name).join(', ')}
        </chakra.p>
      </Box>
    </Box>
  )
}

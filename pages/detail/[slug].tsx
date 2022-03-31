import { API_KEY, BASE_PATH } from '@constants/api'
import { Box, Flex, Heading, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import { API } from '@interfaces/api'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const slug = ctx.params?.slug
  const res = await fetch(`${BASE_PATH}/games${slug ? '/' + slug : ''}?key=${API_KEY}`)
  const game = await res.json()
  return {
    props: { game },
  }
}

const Detail: NextPage<{ game: API.GameDetails }> = ({ game: { name, description, background_image } }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Image src={background_image} alt="3 women looking at a laptop" fit="cover" w="full" h={{ base: 64, md: 'full' }} bg="gray.100" loading="lazy" />
      <Flex direction="column" alignItems="start" justifyContent="center" px={{ base: 4, lg: 20 }} py={24}>
        <Heading
          as="h1"
          mb={6}
          fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color={useColorModeValue('brand.600', 'gray.300')}
          lineHeight="shorter"
        >
          {name}
        </Heading>

        <Box
          pr={{ base: 0, lg: 16 }}
          mb={4}
          color={useColorModeValue('brand.600', 'gray.400')}
          dangerouslySetInnerHTML={{ __html: description }}
          sx={{ '& > p': { marginBottom: 5, '& > br': { marginBottom: 5 } } }}
        />
      </Flex>
    </SimpleGrid>
  )
}

export default Detail

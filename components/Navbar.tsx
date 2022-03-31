import { Box, Button, CloseButton, Flex, HStack, IconButton, Link, VStack, chakra, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import { AiOutlineMenu } from 'react-icons/ai'
import NextLink from 'next/link'
import React from 'react'

const NAV = [
  { label: 'Home', href: '/', variant: 'ghost' },
  { label: 'Contact', href: '/contact', variant: 'ghost' },
  { label: 'Login', href: '/login', variant: 'solid' },
]

export function Navbar() {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <NextLink href="/" passHref>
            <Link>Logo</Link>
          </NextLink>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack as="nav" spacing={1} mr={1} color="brand.500" display={{ base: 'none', md: 'inline-flex' }}>
            {NAV.map(({ label, href, variant }) => (
              <NextLink key={href} href={href} passHref>
                <Button as="a" variant={variant}>
                  {label}
                </Button>
              </NextLink>
            ))}
          </HStack>
          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              as="nav"
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

              {NAV.map(({ label, href }) => (
                <NextLink key={href} href={href} passHref>
                  <Button as="a" w="full" variant="ghost">
                    {label}
                  </Button>
                </NextLink>
              ))}
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  )
}

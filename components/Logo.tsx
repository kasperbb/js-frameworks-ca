import { Box, BoxProps, Text } from '@chakra-ui/react'

interface LogoProps extends BoxProps {}

export function Logo(props: LogoProps) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}

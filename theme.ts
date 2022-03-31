import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body, #__next': {
        background: 'body',
      },
    }),
  },
  colors: {
    gray: {
      1000: '#121721',
    },
  },
  semanticTokens: {
    colors: {
      body: {
        default: 'gray.100',
        _dark: 'gray.1000',
      },
      'card.bg': {
        default: '#fff',
        _dark: 'gray.800',
      },
      'text.dim': {
        default: 'gray.600',
        _dark: 'gray.400',
      },
      'text.dimmer': 'gray.500',
      'text.dimmest': {
        default: 'gray.400',
        _dark: 'gray.600',
      },
    },
    shadows: {
      'card.shadow': {
        default: 'md',
        _dark: 'dark-lg',
      },
    },
  },
})

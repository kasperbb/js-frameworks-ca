import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, chakra, useColorModeValue, useToast } from '@chakra-ui/react'

import { AUTH } from '@constants/api'
import { useAuth } from '@context/AuthContext'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

interface FormData {
  username: string
  password: string
}

export default function Login() {
  const { setSession } = useAuth()
  const router = useRouter()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async data => {
    const res = await fetch(AUTH + '/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { token, code } = await res.json()

    if (code) {
      return toast({
        title: code.includes('incorrect_password') ? 'Incorrect password' : 'Incorrect username',
        status: 'error',
        isClosable: true,
      })
    }

    return handleSuccess(token)
  })

  function handleSuccess(token: string) {
    setSession(token)
    router.push('/admin')
  }

  return (
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center">
        <Heading as="h1" fontSize="4xl">
          Sign in to your account
        </Heading>
      </Stack>
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <chakra.form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={Boolean(errors.username)}>
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register('username', { required: { value: true, message: 'Username is required.' } })} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={Boolean(errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password', { required: { value: true, message: 'Password is required.' } })} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                type="submit"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </chakra.form>
      </Box>
    </Stack>
  )
}

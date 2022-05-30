import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Stack spacing={8} mx="auto" maxW="2xl" py={12} px={6}>
      <Stack align="center">
        <Heading as="h1" fontSize="4xl">
          Send us a message
        </Heading>
      </Stack>
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <chakra.form onSubmit={onSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <FormControl id="firstName" isInvalid={Boolean(errors.firstName)}>
                <FormLabel>First name</FormLabel>
                <Input
                  type="text"
                  {...register('firstName', {
                    required: { value: true, message: 'First name requires minimum 3 characters.' },
                    minLength: { value: 3, message: 'First name requires minimum 3 characters.' },
                  })}
                />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl id="lastName" isInvalid={Boolean(errors.lastName)}>
                <FormLabel>Last name</FormLabel>
                <Input
                  type="text"
                  {...register('lastName', {
                    required: { value: true, message: 'First name requires minimum 3 characters.' },
                    minLength: { value: 4, message: 'Last name requires minimum 3 characters.' },
                  })}
                />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl id="email" isInvalid={Boolean(errors.email)}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  {...register('email', {
                    required: { value: true, message: 'Invalid email address.' },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address.',
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl id="subject" isInvalid={Boolean(errors.subject)}>
                <FormLabel>Subject</FormLabel>
                <Select {...register('subject', { required: { value: true, message: 'Subject is required.' } })}>
                  <option value="option1">General question</option>
                  <option value="option2">Specific question</option>
                </Select>
                <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl id="subject" isInvalid={Boolean(errors.message)}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  {...register('message', {
                    required: { value: true, message: 'Message has to minimum 10 characters.' },
                    minLength: { value: 10, message: 'Message has to minimum 10 characters.' },
                  })}
                />
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Button
                type="submit"
                width="full"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Send
              </Button>
            </GridItem>
          </Grid>
        </chakra.form>
      </Box>
    </Stack>
  )
}

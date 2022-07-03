import { Button, Flex, FormLabel, Input, Stack, FormControl } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >

        <Stack spacing="4">

          <FormControl>

            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email" 
              id="email"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size="lg"
            />

          </FormControl>

          <FormControl>

            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              id="password" 
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size="lg"
            />

          </FormControl>

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>

      </Flex>


    </Flex>
  )
}

export default Home

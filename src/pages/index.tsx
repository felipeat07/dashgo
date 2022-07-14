import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Input } from '../components/Form/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'


const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    console.log(values)
    
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">

          <Input type="email" label="E-mail" {...register('email')} />
          <Input type="password" label="Senha" {...register('password')}/>      

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>

      </Flex>


    </Flex>
  )
}

export default SignIn

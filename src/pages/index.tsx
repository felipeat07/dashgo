import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}


const signInFormSchema = yup.object().shape({
  email: yup.string().required('O e-mail é obrigatório').email('e-mail inválido'),
  password: yup.string().required('A senha é obrigatória'),
})


const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

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

          <Input 
            type="email" 
            label="E-mail" 
            error={formState.errors.email}
            {...register('email')} 
          />

          <Input 
            type="password" 
            label="Senha" 
            error={formState.errors.password}
            {...register('password')}
            />      

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>

      </Flex>


    </Flex>
  )
}

export default SignIn

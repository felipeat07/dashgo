import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from "../../services/api";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}



const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('O e-mail é obrigatório').email('e-mail inválido'),
    password: yup.string().required('A senha é obrigatória').min(6, 'no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })



export default function CreateUser() {
    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date()
            }
        })

        return response.data.user;
    })


    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values);
    }


    return (
        <Box>
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />

                <Box
                    as="form"
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p="8"
                    onSubmit={handleSubmit(handleCreateUser)}
                >


                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8" >
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input
                              name="name"
                              type="name"
                              label="Nome completo"
                              error={formState.errors.name}
                              {...register} 
                            />
                            <Input
                              name="email"
                              type="email"
                              label="E-mail"
                              error={formState.errors.email}
                              {...register} 
                              />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              error={formState.errors.password}
                              {...register} 
                            />
                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da senha"
                              error={formState.errors.password_confirmation}
                              {...register} 
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href={"/users"} passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>



                </Box>
            </Flex>
        </Box>
    );
}
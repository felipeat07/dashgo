import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { useState } from "react";

type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}



export default function UserList() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isFetching, error } = useQuery(['users', page], async () => {
        const { data, headers } = await api.get('users', {
            params: {
                page,

            }
        })
        const totalCount = Number(headers['x-total-count'])
        
        return {
            data,
            totalCount,
        }
    })


    return (
        <Box>
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml="4" /> }
                        </Heading>

                        <Link href={"/users/create"} passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                cursor="pointer"
                            >
                                Criar novo usuário
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify='center' >
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            Falha ao obter dados dos usuários
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">

                                <Thead>
                                    <Tr>
                                        <Th px="6" color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        <Th>Data de Cadastro</Th>
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data?.data.users.map((user: User) => (
                                        <Tr key={user.id}>
                                            <Td px="6">
                                                <Checkbox colorScheme="pink" />
                                            </Td>

                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{user.name}</Text>
                                                    <Text fontSize="sm" color="gray.600">{user.email}</Text>
                                                </Box>
                                            </Td>

                                            <Td>
                                                {new Date(user.created_at).toLocaleDateString('pt-BR', {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric'
                                                })}
                                            </Td>

                                            <Td>
                                                <Button
                                                    as="a"
                                                    size="sm"
                                                    fontSize="sm"
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiPencilLine} />}
                                                    cursor="pointer"
                                                >
                                                    Editar
                                                </Button>
                                            </Td>

                                        </Tr>
                                    ))}
                                </Tbody>

                            </Table>

                            <Pagination 
                                totalCurrentRegisters={data?.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />

                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
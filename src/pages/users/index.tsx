import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Form/Pagination";
import { Sidebar } from "../../components/Form/Sidebar";
import { Header } from "../../components/Header";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            cursor="pointer"
                        >
                            Criar novo usuário
                        </Button>
                    </Flex>

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
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Felipe Tavares</Text>
                                        <Text fontSize="sm" color="gray.600">felipeat07@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>11 de jul de 2022</Td>

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
                        </Tbody>


                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Felipe Tavares</Text>
                                        <Text fontSize="sm" color="gray.600">felipeat07@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>11 de jul de 2022</Td>

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
                        </Tbody>



                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Felipe Tavares</Text>
                                        <Text fontSize="sm" color="gray.600">felipeat07@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>11 de jul de 2022</Td>

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
                        </Tbody>


                    </Table>

                    <Pagination />

                </Box>
            </Flex>
        </Box>
    );
}
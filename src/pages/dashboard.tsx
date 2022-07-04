import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Form/Sidebar";
import { Header } from "../components/Header";

export default function Dashboard(){
    return (
        <Flex direction="column" height="100vh">
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />
            </Flex>

        </Flex>
    )
}
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex alignItems="center">
            <Box mr="4" textAlign="right" >
                <Text>Felipe Tavares</Text>
                <Text color="gray.300" fontSize="small">felipeat07@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Felipe Tavares" src="https://www.github.com/felipeat07.png" />
        </Flex>
    );
}
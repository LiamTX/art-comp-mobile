import {
    Box,
    Center,
    FormControl,
    Heading,
    Icon,
    Input,
    Pressable,
    Stack,
    VStack
} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";

export function Login() {
    const [show, setShow] = React.useState(false);

    return (
        <Center height="full">
            <Box width="full">
                <Heading >Entrar</Heading>

                <Stack space={4} w="100%" alignItems="center">
                    <Input w={{
                        base: "75%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
                    <Input w={{
                        base: "75%",
                        md: "25%"
                    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>} placeholder="Password" />
                </Stack>
            </Box>
        </Center>
    );
}
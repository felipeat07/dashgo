import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ name, label, error = null, ...rest}, ref) => {
    return(
        <FormControl isInvalid={!!error}>

            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
              name={name} 
              id="email"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size="lg"
              {...rest}
              ref={ref}
            />

            { !!error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            )}


          </FormControl>
    );
}

export const Input = forwardRef(InputBase)
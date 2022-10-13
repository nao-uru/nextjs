import { Box, ChakraProvider, Flex, Image } from "@chakra-ui/react";


export const SampleImg = () => {

  return (
    <>
    <ChakraProvider>
      <Flex justifyContent="center">
       <Image boxSize="150px" src="/img/icon.png" alt="" />
      </Flex>
    </ChakraProvider>
    </>
  )
}

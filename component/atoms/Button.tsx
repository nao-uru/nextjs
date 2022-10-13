import { ChakraProvider, useBreakpointValue, Box } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const Button = ( props ) => {

  return (
    <>
    <ChakraProvider>
      <Link href="">
      <Box css={sampleButton}>{props.text}</Box>
      </Link>
    </ChakraProvider>
    </>
  )
}

const sampleButton = css`
  font-size: 20px;
  font-weight: bold;
  width: 400px;
  border-radius: 4px;
  background-color: #6ecd7f;
  text-align: center;
  margin: 80px auto;
  padding: 20px 40px;
`

import React from 'react'
import {
    Box, Flex,
    Heading, Text,
    Button, Image
} from "@chakra-ui/react";
import { AiFillBell } from 'react-icons/ai'


function HeroSection() {
    return (
        <Box>
            <Flex background={"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)"} px={"120px"} py={"15px"}>
                <Flex flexDirection="column" justifyContent={"center"} width={"50%"} fontFamily={"sans-serif"}>
                    <Heading as="h1" color="black" fontWeight={"bold"} fontSize={['48px', '50px']}>
                        <Text as="span" display="inline-block" color={"#19b6e0"}>
                            Customize
                        </Text>
                        <br />
                        A journey that<br /> Reflects your style
                    </Heading>
                    <Text fontStyle={"normal"} fontSize={"1.3rem"} opacity={"0.6"} lineHeight={"2rem"} letterSpacing={".0125em"} width={"80%"} mt={"0.5rem"} >
                        Plan a journey that matches your preferences, interests, and personality with the help of our user-friendly travel planning tool.
                    </Text>
                    <Button fontSize={['20px', '20px']} fontWeight={"bold"} fontFamily={"sans-serif"} width={"8rem"} h={"3rem"} border={"none"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                        Notify Me
                    </Button>
                </Flex>
                <Box width={"50%"}>
                    <Image
                        alt="hero.png"
                        w="670px"
                        height="680px"
                        src="/landing-page/hero.png"
                        mr={"0"}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default HeroSection
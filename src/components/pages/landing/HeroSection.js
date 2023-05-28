import React from 'react'
import {
    Box, Flex,
    Heading, Text,
    Button, Image
} from "@chakra-ui/react";
import { AiFillBell } from 'react-icons/ai'
import Textra from "react-textra";



function HeroSection() {
    return (
        <Box>
            <Flex background={{ sm: 'landing-page/hero-bg-mobile.png', md: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)", lg: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)" }} px={{ sm: '10px', md: '50px', lg: "80px", xl: '120px' }} py={"15px"} flexDir={{ sm: 'column', md: 'column', lg: 'row' }}>
                <Flex flexDirection="column" justifyContent={"center"} width={{ sm: "100%", md: '100%', lg: '50%' }} mt={{ md: '20px' }} fontFamily={"sans-serif"}>
                    <Heading as="h1" color="black" fontWeight={"bold"} fontSize={{ sm: '30px', md: '48px', lg: '50px' }}>
                        <Text as="span" display="inline-block" color={"#19b6e0"}>
                            <Textra
                                data={['Build', 'Organize', 'Customize']}
                                effect='topDown'
                                duration={850}
                                stopDuration={500}
                            />{" "}
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
                <Box width={{ sm: '70%', md: '90%', lg: "50%" }}>
                    <Image
                        alt="hero.png"
                        w={{ sm: '2000px', md: '2000px', lg: '672px' }}
                        height={{ sm: '800px', md: '1000px', lg: '680px' }}
                        src="/landing-page/hero.png"

                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default HeroSection
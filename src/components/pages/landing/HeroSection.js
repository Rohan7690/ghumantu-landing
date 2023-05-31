import React from 'react'
import {
    Box, Flex,
    Heading, Text,
    Button, Image
} from "@chakra-ui/react";
import Textra from "react-textra";

function HeroSection() {
    return (
        <Box p={['2rem','2rem','0']}
            w={'100%'}
            background={['landing-page/hero-bg-mobile.png', "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)", "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)"]}>
            <Box w={['100%', '100%', '85%']}
                mx={'auto'}
                >
                <Flex py={"15px"} flexDir={['column', 'column', 'row']}>
                    <Flex flexDirection="column" justifyContent={"center"} width={["100%", '100%', '50%']} mt={{ md: '20px' }} fontFamily={"sans-serif"}>
                        <Heading textTransform='capitalize' as="h1" color="black" fontWeight={"bold"} fontSize={['30px', '48px', '50px']}>
                            <Text as="span" display="inline-block" color={"#19b6e0"}>
                                <Textra
                                    data={['Build', 'Organize', 'Customize']}
                                    effect='topDown'
                                    duration={850}
                                    stopDuration={500}
                                />{" "}
                            </Text>
                            <br />
                            A Journey that<br /> Reflects your style
                        </Heading>
                        <Text fontStyle={"normal"} fontSize={['15px', '24px', '25px']} opacity={"0.6"} lineHeight={"2rem"} letterSpacing={".0125em"} width={"80%"} my={"2rem"} >
                            Plan a journey that matches your preferences, interests, and personality with the help of our user-friendly travel planning tool.
                        </Text>
                        <Button
                            mb={5}
                            fontSize={['20px', '20px']}
                            fontWeight={"bold"}
                            width={"8rem"}
                            h={"3rem"}
                            border={"none"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                            Notify Me
                        </Button>
                    </Flex>
                    <Box width={['100%', '100%', "50%"]}>
                        <Image
                            alt="hero image"
                            w={['100%', '100%', '672px']}
                            h={['100%', '1000px', '680px']}
                            src="/landing-page/hero.png"
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default HeroSection
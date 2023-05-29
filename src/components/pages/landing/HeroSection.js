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
        <Box w={'100%'}
            background={[ 'landing-page/hero-bg-mobile.png', "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)",  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D0FCFF 100%)" ]} px={[ '10px', '50px',  "80px"]}
        >
        <Box w={['100%', '100%', '90%']}
            mx={'auto'}>
        <Flex  py={"15px"} flexDir={['column',  'column',  'row' ]}>
                <Flex flexDirection="column" justifyContent={"center"} width={["100%",  '100%',  '50%' ]} mt={{ md: '20px' }} fontFamily={"sans-serif"}>
                    <Heading as="h1" color="black" fontWeight={"bold"} fontSize={[ '30px',  '48px',  '50px' ]}>
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
                    <Text fontStyle={"normal"} fontSize={"1.3rem"} opacity={"0.6"} lineHeight={"2rem"} letterSpacing={".0125em"} width={"80%"} my={"2rem"} >
                        Plan a journey that matches your preferences, interests, and personality with the help of our user-friendly travel planning tool.
                    </Text>
                    <Button fontSize={['20px', '20px']} fontWeight={"bold"} fontFamily={"sans-serif"} width={"8rem"} h={"3rem"} border={"none"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                        Notify Me
                    </Button>
                </Flex>
                <Box width={[ '70%', '90%', "50%" ]}>
                    <Image
                        alt="hero.png"
                        w={['2000px',  '2000px',  '672px' ]}
                        height={[  '800px', '1000px', '680px' ]}
                        src="/landing-page/hero.png"
                    />
                </Box>
            </Flex>
        </Box>
        </Box>
    )
}

export default HeroSection
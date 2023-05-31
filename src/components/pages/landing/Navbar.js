import {
    Menu, MenuButton, MenuList, MenuItem, Box, Flex, Link, Text,
    Image, Button,
    useDisclosure, Stack, StatDownArrow
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from '@chakra-ui/react';
import { BsBellFill } from "react-icons/bs";

import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const btnRef = useRef()
    const [hamServiceToggle, setHamServiceToggle] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex w={['100%', '100%', '50%']} backdropFilter={"blur(20px)"}
                px={'2'} py={'4'}
                backgroundColor={"hsla(0,0%,100%,.5)"}
                h={"100%"}
                gap={"5"}
                borderRadius={['none', 'none', 'full']}
                borderBottom={"2px solid hsla(0,0%,79%,.8)"}
                mx='auto'
                justifyContent='space-between'
                position={"sticky"}
                 top={['0', '0', '10']}
                zIndex={"10"}>
                {/* Logo (Left Section) */}
                <Flex justifyContent='center' alignItems='center'>
                    <Box w='3rem' h='3rem'>
                        <Image objectFit='contain' src="landing-page/logoNav.png" />
                    </Box>
                </Flex>
                <Flex w='100%' alignItems='center' justifyContent='flex-end' >
                    <Box display={['block', 'block', 'none']} mx={5}>
                        <HamburgerIcon
                            color={"#14cdff"}
                            onClick={onOpen}
                        />
                    </Box>
                    <Flex w='100%' display={['none', 'none', 'flex']}>
                        <Flex alignItems='center' w='100%' justifyContent='center' gap={'10'}>
                            <Text>
                                Home
                            </Text>
                            <Menu>
                                <MenuButton color={"black"}>
                                    <Flex alignItems='center' gap={2}>
                                        <Text>
                                            Services
                                        </Text>
                                        <Box mt={0}>
                                            <StatDownArrow color="#14cdff" />
                                        </Box>
                                    </Flex>
                                </MenuButton>
                                <MenuList backgroundColor={"#fff"} dropShadow={"0 8px 16px 0 rgba(0,0,0,.2)"}>
                                    <MenuItem background={"white"} border={'none'}>
                                        <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Budget Planner</Link>
                                    </MenuItem>
                                    <MenuItem background={"white"} border={'none'}>
                                        <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Route Mapping</Link>
                                    </MenuItem>
                                    <MenuItem background={"white"} border={'none'} >
                                        <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Local Search Engine</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Text>
                                About
                            </Text>
                            <Text color={"black"} >
                                Contact Us
                            </Text>
                        </Flex>
                        <Box>
                            <Button
                                _hover={{
                                    background: "linear-gradient(93.01deg,#00c2ff .65%,#14cdff)",
                                }}
                                border={"none"}
                                fontSize={"18px"}
                                fontWeight={"bold"}
                                fontFamily={"sans-serif"}
                                width={"10rem"} h={"3rem"}
                                color={"white"}
                                borderRadius={"100px"}
                                background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                                Login/ Signup
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size='lg' />
                    <DrawerBody bgColor='#ddf8ff'
                        pt='40px'
                        display='flex'
                        justifyContent='center'
                        alignItems='flex-start'
                        fontSize='2xl' fontWeight='semibold'>
                        <Stack spacing={5}>
                            <Stack onClick={() => {
                                route.push('/')
                            }}>
                                <Text as={Link}>Home</Text>
                            </Stack>
                            <Stack>
                                <Stack direction='row' spacing={4} align='center'>
                                    <Text as={Link}>Services</Text>
                                    {hamServiceToggle ?
                                        <AiOutlineUp size='16'
                                            onClick={() => setHamServiceToggle(false)} />
                                        :
                                        <AiOutlineDown
                                            size='16'
                                            onClick={() => setHamServiceToggle(!hamServiceToggle)} />
                                    }
                                </Stack>
                                {hamServiceToggle &&
                                    <Stack fontSize='xl'>
                                        <Stack spacing={2} ml="4" fontWeight='light'>
                                            <Text as={Link} onClick={() => {
                                                document.getElementById("budget").scrollIntoView({ behavior: "smooth" })
                                                onClose()
                                            }}>Budget Planner</Text>
                                            <Text as={Link} onClick={() => {
                                                document.getElementById("route").scrollIntoView({ behavior: "smooth" })
                                                onClose()
                                            }}>Route Mapping</Text>
                                            <Text as={Link} onClick={() => {
                                                document.getElementById("lse").scrollIntoView({ behavior: "smooth" })
                                                onClose()
                                            }}>Local Search Engine</Text>
                                        </Stack>
                                    </Stack>}
                            </Stack>
                            <Box onClick={() => {
                                document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                                onClose()
                            }}>
                                <Text as={Link}>About</Text>
                            </Box>
                            <Box onClick={() => {
                                document.getElementById("contactus").scrollIntoView({ behavior: "smooth" })
                                onClose()
                            }}>
                                <Text as={Link}>Contact</Text>
                            </Box>
                            <button className="btn1 btn1-getStarted btn-getStarted--nav"
                                onClick={
                                    () => {
                                        document.getElementById("contactus").scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >
                                Notify Me
                                <BsBellFill className="getStartedIcon bell-icon-animation" size="20" />
                            </button>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
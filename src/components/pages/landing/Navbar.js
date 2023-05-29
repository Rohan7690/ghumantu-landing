import { Menu, MenuButton, MenuList, MenuItem, Box, Flex, Link, Text, UnorderedList, ListItem, Image, Button, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineDown, AiFillCloseCircle, AiOutlineUp } from "react-icons/ai";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from '@chakra-ui/react';
import { BsBellFill } from "react-icons/bs";

import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const btnRef = useRef()
    const [hamServiceToggle, setHamServiceToggle] = useState(false)


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 1008) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        // <Box as="nav" color="white" borderRadius={"20%"} position={"sticky"} top={['0', '0', '10']} zIndex={"10"} >
        //     <Flex alignItems="center" px={{ sm: '20px' }} justifyContent={['space-between']} backdropFilter={"blur(20px)"} backgroundColor={"hsla(0,0%,100%,.5)"} margin={"0 auto"} h={"80px"} gap={"60px"} width={{ base: "100%", md: '100%', lg: '80%', xl: '55%' }} borderRadius={{ sm: "0px", md: "0px", lg: "100px", xl: '100px' }} borderBottom={"2px solid hsla(0,0%,79%,.8)"}>
        //         <Box>
        //             <Text fontSize="xl" fontWeight="bold">
        //                 <Image src="landing-page/logoNav.png" w={"4rem"} h={"3.5rem"} />
        //             </Text>
        //         </Box>
        //         <Box>
        //             {isMobile ? (

        //                 <IconButton
        //                     icon={<HamburgerIcon />}
        //                     size="md"
        //                     aria-label="Open menu"
        //                     onClick={onOpen}
        //                     variant="ghost"
        //                     color={'black'}

        //                 />
        //             ) : (
        //                 <UnorderedList display={"flex"} alignItems={'center'} gap={"60px"} listStyleType={"none"} >
        //                     <ListItem >
        //                         <Link href="/" style={{ textDecoration: "none" }} color={"black"}>
        //                             Home
        //                         </Link>
        //                     </ListItem>

        //                     <ListItem >
        //                         <Menu>
        //                             <MenuButton mr={"10px"} color={"black"}>
        //                                 Services
        //                             </MenuButton>
        //                             <MenuList mt={'20px'} backgroundColor={"#fff"} dropShadow={"0 8px 16px 0 rgba(0,0,0,.2)"}>
        //                                 <MenuItem background={"white"} border={'none'}>
        //                                     <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Budget Planner</Link>
        //                                 </MenuItem>
        //                                 <MenuItem background={"white"} border={'none'}>
        //                                     <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Route Mapping</Link>
        //                                 </MenuItem>
        //                                 <MenuItem background={"white"} border={'none'} >
        //                                     <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Local Search Engine</Link>
        //                                 </MenuItem>
        //                             </MenuList>
        //                         </Menu>

        //                     </ListItem>

        //                     <ListItem>
        //                         <Link style={{ textDecoration: "none" }} href="#" color={"black"}>
        //                             About
        //                         </Link>
        //                     </ListItem>

        //                     <ListItem>
        //                         <Link href="#" style={{ textDecoration: "none" }} color={"black"} >
        //                             Contact Us
        //                         </Link>
        //                     </ListItem>
        //                     <ListItem>
        //                         <Button border={"none"} fontSize={"18px"} fontWeight={"bold"} fontFamily={"sans-serif"} width={"10rem"} h={"3rem"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
        //                             Notify Me
        //                         </Button>
        //                     </ListItem>
        //                 </UnorderedList>
        //             )}
        //             <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        //                 <DrawerOverlay>
        //                     <DrawerContent>
        //                         <DrawerCloseButton />
        //                         <DrawerHeader>Menu</DrawerHeader>
        //                         <DrawerBody>
        //                             <Box as="span" display="block" marginBottom={4}>
        //                                 Home
        //                             </Box>
        //                             <Box as="span" display="block" marginBottom={4}>
        //                                 About
        //                             </Box>
        //                             <Menu>
        //                                 <MenuButton mr={"10px"} color={"black"}>
        //                                     Services
        //                                 </MenuButton>
        //                                 <MenuList backgroundColor={"#fff"} dropShadow={"0 8px 16px 0 rgba(0,0,0,.2)"}>
        //                                     <MenuItem background={"white"} border={'none'}>
        //                                         <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Budget Planner</Link>
        //                                     </MenuItem>
        //                                     <MenuItem background={"white"} border={'none'}>
        //                                         <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Route Mapping</Link>
        //                                     </MenuItem>
        //                                     <MenuItem background={"white"} border={'none'} >
        //                                         <Link fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Local Search Engine</Link>
        //                                     </MenuItem>
        //                                 </MenuList>
        //                             </Menu>
        //                             <Box as="span" display="block" marginBottom={4}>
        //                                 Contact
        //                             </Box>
        //                         </DrawerBody>
        //                     </DrawerContent>
        //                 </DrawerOverlay>
        //             </Drawer>
        //         </Box>
        //     </Flex>
        // </Box>
        <>
            <Flex w={['100%', '100%', '60%']} mx='auto' justifyContent='space-between'>
                {/* Logo (Left Section) */}
                <Box bg='red.200'>
                    <Image src="landing-page/logoNav.png" w={"4rem"} h={"3.5rem"} />
                </Box>
                {/* Links (Right Section) */}
                <Flex w='100%' alignItems='center' justifyContent='flex-end'>
                    {/* Other Desktop options */}
                    {/* Hamburger */}
                    <Box display={['block', 'block', 'none']}>
                        <HamburgerIcon
                            onClick={onOpen}
                        />
                    </Box>
                    <Flex bg='green.300' w='100%' display={['none', 'none', 'flex']} gap={5}>
                        <Flex alignItems='center' w='100%' justifyContent='center' gap={'5'}>
                            <Link href="/" style={{ textDecoration: "none" }} color={"black"}>
                                Home
                            </Link>
                            <Link href="#" style={{ textDecoration: "none" }} color={"black"} >
                                Services
                            </Link>
                            <Link style={{ textDecoration: "none" }} href="#" color={"black"}>
                                About
                            </Link>
                            <Link href="#" style={{ textDecoration: "none" }} color={"black"} >
                                Contact Us
                            </Link>
                        </Flex>
                        <Box>
                            <Button border={"none"} fontSize={"18px"} fontWeight={"bold"} fontFamily={"sans-serif"} width={"10rem"} h={"3rem"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                                Notify Me
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
                        pt='24'
                        display='flex'
                        justifyContent='center'
                        alignItems='flex-start'
                        fontSize='5xl' fontWeight='semibold'>
                        <Stack spacing={12}>
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
                                    <Stack fontSize='4xl'>
                                        <Stack spacing={5} ml="4" fontWeight='light'>
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
                            <button className="btn btn-getStarted btn-getStarted--nav"
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
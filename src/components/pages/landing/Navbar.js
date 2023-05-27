import { Menu, MenuButton, MenuList, MenuItem, Box, Flex, Link, Text, UnorderedList, ListItem, Image, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useState ,useEffect} from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {
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
        <Box as="nav" color="white" mt={"40px"} borderRadius={"20%"} position={"sticky"} top={"10"} zIndex={"1"} >
            <Flex alignItems="center" justifyContent="center" backdropFilter={"blur(20px)"} backgroundColor={"hsla(0,0%,100%,.5)"} margin={"0 auto"} h={"80px"} gap={"60px"} width={{sm:"100%",md:'100%',lg:'80%',xl:'55%'}} borderRadius={{sm:"0px",md:"0px",lg:"100px",xl:'100px'}} borderBottom={"2px solid hsla(0,0%,79%,.8)"}>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">
                        <Image src="landing-page/logoNav.png" w={"4rem"} h={"3.5rem"} />
                    </Text>
                </Box>
 
                <Box>
                {isMobile ? (

        <IconButton
          icon={<HamburgerIcon />}
          size="md"
          aria-label="Open menu"
          onClick={onOpen}
          variant="ghost"
          color={'black'}
          
        />
      ) : (
                    <UnorderedList display={"flex"} gap={"60px"} listStyleType={"none"} >
                        <ListItem >
                            <Link href="/" style={{ textDecoration: "none" }} color={"black"}>
                                Home
                            </Link>
                        </ListItem>

                        <ListItem >
                            <Menu>
                                <MenuButton mr={"10px"} color={"black"}>
                                    Services
                                </MenuButton>
                                <MenuList borderRadius={'20%'}    backgroundColor={"#fff"} dropShadow={"0 8px 16px 0 rgba(0,0,0,.2)"}>
                                    <MenuItem background={"white"} border={'none'}>
                                        <Link   fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Budget Planner</Link>
                                    </MenuItem>
                                    <MenuItem background={"white"} border={'none'}>
                                        <Link   fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Route Mapping</Link>
                                    </MenuItem>
                                    <MenuItem background={"white"} border={'none'} >
                                        <Link   fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Local Search Engine</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>

                        </ListItem>

                        <ListItem>
                            <Link style={{ textDecoration: "none" }} href="#" color={"black"}>
                                About
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="#" style={{ textDecoration: "none" }} color={"black"} >
                                Contact Us
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Button border={"none"} fontSize={"18px"} fontWeight={"bold"} fontFamily={"sans-serif"} width={"10rem"} h={"3rem"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                                Notify Me
                            </Button>
                        </ListItem>
                    </UnorderedList>
                    )}
                    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody>
                            <Box as="span" display="block" marginBottom={4}>
                                Home
                            </Box>
                            <Box as="span" display="block" marginBottom={4}>
                                About
                            </Box>
                            <Box as="span" display="block" marginBottom={4}>
                                Services
                            </Box>
                            <Box as="span" display="block" marginBottom={4}>
                                Contact
                            </Box>
                            </DrawerBody>
                        </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;

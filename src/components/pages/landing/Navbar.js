import { Menu, MenuButton, MenuList, MenuItem ,Box, Flex, Link, Text, UnorderedList, ListItem, Image, Button, IconButton, useDisclosure } from "@chakra-ui/react";


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box as="nav" color="white" mt={"40"} borderRadius={"20%"} position={"sticky"} top={"10"} zIndex={"1"} >
            <Flex alignItems="center" justifyContent="center" backdropFilter={"blur(20px)"} backgroundColor={"hsla(0,0%,100%,.5)"} margin={"0 auto"} h={"80"} gap={"60"} width={"55%"} borderRadius={"100px"} borderBottom={"2px solid hsla(0,0%,79%,.8)"}>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">
                        <Image src="landing-page/LogoNav.png" w={"4rem"} h={"3.5rem"} />
                    </Text>
                </Box>
                <Box>

                    <UnorderedList display={"flex"} gap={"60"} listStyleType={"none"} >
                        <ListItem >
                            <Link href="/" style={{ textDecoration: "none" }} color={"black"}>
                                Home
                            </Link>
                        </ListItem>

                        <ListItem >
                                <Menu>
                                    <MenuButton mr={"10px"} color={"black"}>
                                        Services<Button border={"none"} borderRadius={"100%"} height={"20px"} ml={"10"} background={"#ddf8ff"}><svg fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></Button>
                                    </MenuButton>
                                    <MenuList borderRadius={'20%'} w={"6rem"} p={"1rem"} backgroundColor={"#fff"} dropShadow={"0 8px 16px 0 rgba(0,0,0,.2)"} pb={"15px"}>
                                        <MenuItem background={"white"} border={'none'}>
                                            <Link height={"40"} w={"100"} fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Budget Planner</Link>
                                        </MenuItem>
                                        <MenuItem background={"white"} border={'none'}>
                                            <Link height={"40"} w={"100"} fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Route Mapping</Link>
                                        </MenuItem>
                                        <MenuItem background={"white"} border={'none'} pb={"15px"}>
                                            <Link height={"40"} w={"100"} fontSize={"1rem"} color={"#666"} style={{ textDecoration: "none" }} href="/">Local Search Engine</Link>
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
                    </UnorderedList>
                </Box>
                <Box>
                    <Button border={"none"} fontSize={"18px"} fontWeight={"bold"} fontFamily={"sans-serif"} width={"10rem"} h={"3rem"} color={"white"} borderRadius={"100px"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
                        Notify Me 
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;

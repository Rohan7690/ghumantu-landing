import React from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  VStack,
  HStack,
  Spacer,
  Image
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';

const ContactForm = () => {
  return (
    <Box px={{sm:'50px',md:'50px',lg:'220px'}} h={'630px'} mt={'50px'} >
      <Flex flexDir={{ sm: 'column', md: 'row',lg: 'row' }}>
        <Box width={{sm:'100%',lg:'50%'}} >
          <VStack spacing={4} align="start">
            <Heading as="h2" fontSize={{sm:'2rem',md:'3rem'}} >
              Get notified when we{' '}<br/>
              <Text as="span" color={"#19b6e0"}>
                launch!
              </Text>
            </Heading>
            <Text fontSize={{sm:'1.2rem',md:'1.2rem'}} w={{sm:'100%',lg:'70%'}}>
              Submit your email address 📧 below, and we'll let you know as soon as we go live.
            </Text>
            <HStack spacing={2} fontSize={'1.2rem'} w={'70%'} >
              <Text mt={{sm:'0px',md:'90px'}}><EmailIcon/>{' '}vijay94622@gmail.com (Co-Founder)</Text>
            </HStack>
            <HStack spacing={2} fontSize={'1.2rem'} w={'70%'}>
              <Text><EmailIcon/>{' '}mmsharma08121997@gmail.com (Co-Founder)</Text>
            </HStack>
          </VStack>
        </Box>
        
        <Box width={{sm:'100%',lg:'40%'}} mb={{sm:'100px'}} >
          <FormControl  >
            <Input type="text" border={'1px solid black'} h={{sm:'40px',md:'70px'}} my={'30px'} name="name"  placeholder="Name" required />
            <Input type="email" border={'1px solid black'}  h={{sm:'40px',md:'70px'}}  name="email"  placeholder="Email" required />
            <Textarea type="text" border={'1px solid black'} h={{sm:'40px',md:'70px'}}  my={'30px'} name="message"  placeholder="Message" required />
            <Button type="submit" w={{sm:'430px',md:'420px',lg:'420px'}}  color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;

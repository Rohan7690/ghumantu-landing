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
    <Box px={'220px'} h={'630px'} mt={'50px'}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box width={'50%'} >
          <VStack spacing={4} align="start">
            <Heading as="h2" fontSize={'3rem'} >
              Get notified when we{' '}<br/>
              <Text as="span" color={"#19b6e0"}>
                launch!
              </Text>
            </Heading>
            <Text fontSize={'1.2rem'} w={'70%'}>
              Submit your email address 📧 below, and we'll let you know as soon as we go live.
            </Text>
            <HStack spacing={2} fontSize={'1.2rem'} w={'70%'}>
              <Text><EmailIcon/>{' '}vijay94622@gmail.com (Co-Founder)</Text>
            </HStack>
            <HStack spacing={2} fontSize={'1.2rem'} w={'70%'}>
              <Text><EmailIcon/>{' '}mmsharma08121997@gmail.com (Co-Founder)</Text>
            </HStack>
          </VStack>
        </Box>
        <Image src='landing-page/contact-element.png' zIndex={'-1'} width={'200px'} h={'200px'} mr={'100px'}/>
        <Box w={'420px'} zIndex={'1'}>
          <FormControl  >
            <Input type="text" border={'1px solid black'} h={'70px'} my={'30px'} name="name"  placeholder="Name" required />
            <Input type="email" border={'1px solid black'}  h={'70px'}  name="email"  placeholder="Email" required />
            <Textarea type="text" border={'1px solid black'} h={'150px'}  my={'30px'} name="message"  placeholder="Message" required />
            <Button type="submit" w={'420px'} color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;

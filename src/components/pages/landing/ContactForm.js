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
import { EmailIcon } from '@chakra-ui/icons';

const ContactForm = () => {
  return (
    <Box
      w={['100%', '100%', '85%']}
      mx={'auto'}
      my="10"
    >
      <Flex flexDir={['column', 'column', 'row']}>
        <Box width={[ '100%',  '100%','50%' ]} >
          <VStack spacing={4}   textAlign={['center','center','start']}>
            <Heading as="h2"
              textAlign={['center', 'left','left']}
              fontSize={['30px', '48px', '50px']} >
              Get notified when we{' '}<br />
              <Text as="span" color={"#19b6e0"}>
                launch!
              </Text>
            </Heading>
            <Text fontSize={['15px', '24px', '25px']} w={[ '100%',  '100%' ]}>
              Submit your email address 📧 below, and we'll let you know as soon as we go live.
            </Text>
            <HStack spacing={2} fontSize={['15px', '24px', '25px']} w={['100%']} >
              <Text mt={[ '0px', '90px' ,'90px']}><EmailIcon />{' '}vijay94622@gmail.com (Co-Founder)</Text>
            </HStack>
            <HStack spacing={2} fontSize={['15px', '24px', '25px']} w={['100%']}>
              <Text ><EmailIcon />{' '}mmsharma08121997@gmail.com (Co-Founder)</Text>
            </HStack>
          </VStack>
        </Box>

        <Box width={[ '100%',  '100%','50%' ]} mb={[ '100px' ]} >
          <FormControl width={[ '100%',  '100%','70%' ]} >
            <Input type="text" border={'1px solid black'} h={['40px', '70px' ]} my={'30px'} name="name" placeholder="Name" required />
            <Input type="email" border={'1px solid black'} h={[ '40px',  '70px' ]} name="email" placeholder="Email" required />
            <Textarea type="text" border={'1px solid black'} h={[ '40px',  '70px'] } my={'30px'} name="message" placeholder="Message" required />
            <Button type="submit" w={[ '100%', '100%',  '100%' ]} color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;

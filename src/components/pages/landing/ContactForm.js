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
  Image,
  Stack
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const ContactForm = () => {
  return (
    <Box p={['2rem', '2rem', '0']}
      w={['100%', '100%', '85%']}
      mx={'auto'}
      my="10"
    >
      {/* <Flex flexDir={['column', 'column', 'row']}>
        <Box width={[ '100%',  '100%','50%' ]}  >
          <VStack spacing={4}   textAlign={['center','center','start']}>
            <Heading as="h2"
              textAlign={['center', 'center','left']}
              fontSize={"2rem"} >
              Get notified when we{' '}<br />
              <Text as="span" color={"#19b6e0"}>
                launch!
              </Text>
            </Heading>
            <Text fontSize={"1.2rem"} w={[ '100%',  '100%' ]}>
              Submit your email address 📧 below, and we'll let you know as soon as we go live.
            </Text>
            <HStack spacing={2} fontSize={"1.2rem"} w={['100%']} >
              <Text mt={[ '0px', '90px' ,'90px']} ><EmailIcon />{' '}vijay94622@gmail.com (Co-Founder)</Text>
            </HStack>
            <HStack spacing={2} fontSize={"1.2rem"} w={['100%']}>
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
      </Flex> */}
      <Stack
        spacing={5}
        p={[5, 10, 20]}
        direction={['column', 'column', 'row']} justify='space-between'>
        <Stack w={['100%', '100%', '50%']} justify='center' align='flex-start'>
          <Box>
            <Box position='relative'>
              <Heading as="h2"
                textAlign={['center', 'center', 'left']}
                fontSize={['3xl','3xl','5xl']} >
                Get notified when we{' '}<br />
                <Text as="span" color={"#19b6e0"}>
                  launch!
                </Text>
              </Heading>
              <Box position='absolute' top={['-25', '-45', '-65']} right={['-25', '-35', '-45']}
                w={['100px', '100px', '200px']}
                zIndex={-1}
              >
                <Image
                  w={['100%', '100%', '200px']}
                  objectFit={'contain'}
                  src='/landing-page/contact-element.png' alt='rocket' />
              </Box>
            </Box>
            <Text fontSize={"1.2rem"} mt={5} w={['100%', '100%']}>
              Submit your email address 📧 below, and we'll let you know as soon as we go live.
            </Text>
          </Box>
          <Stack spacing={5}>
            <Text mt={['0px', '90px', '90px']} ><EmailIcon />{' '}vijay94622@gmail.com (Co-Founder)</Text>
            <Text ><EmailIcon />{' '}mmsharma08121997@gmail.com (Co-Founder)</Text>
          </Stack>
        </Stack>
        <Stack
          w={['100%', '100%', '50%']}>
          <Stack
            spacing={5}
            justify='center'
            align='center'
            w={['100%', '100%', '100%']}
          >
            <FormControl width={['100%', '100%', '70%']} >
              <Input type="text" border={'1px solid black'} h={['40px', '70px']} my={'30px'} name="name" placeholder="Name" required />
              <Input type="email" border={'1px solid black'} h={['40px', '70px']} name="email" placeholder="Email" required />
              <Textarea type="text" border={'1px solid black'} h={['40px', '70px']} my={'30px'} name="message" placeholder="Message" required />
              <Button type="submit" w={['100%', '100%', '100%']} color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'}>
                Submit
              </Button>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactForm;

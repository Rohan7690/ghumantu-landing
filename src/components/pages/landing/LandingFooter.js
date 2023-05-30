// import React from "react";
// import {
//   Image
// } from "@chakra-ui/react";

// import {
//   Divider,
//   Link,
//   Stack,
//   Text,
// } from '@chakra-ui/react'
// import { FaCopyright, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import {
//   AiFillInstagram,
//   AiFillFacebook,
//   AiFillLinkedin,
// } from "react-icons/ai"
// const LandingFooter = () => {
//   return (
//     <Stack as="footer" role="contentinfo" w={{ md: "100%", lg: "100%" }}
//       padding='8'
//       color='#fff'
//       bgColor={'#04151A'}
//       justify='center'
//       align='center'
//       spacing={8}
//       fontFamily='Dm Sans'
//       mt={'50px'}
//     >
//       <Stack>
//         <Image src="landing-page/footerLogo.png" alt="logo" width={"80px"} height={"80px"} />
//       </Stack>
//       <Stack justify='center' align='center'>
//         <Text fontSize={{ sm: '', md: '2xl', lg: '3xl' }} w='100%' textAlign='center' color='#fff'>
//           Plan a perfect adventure with our travel planning tool
//         </Text>
//       </Stack>
//       <Stack direction='row' spacing={10}
//         justify='center'

//         fontSize={{ sm: 'sm', md: '2xl', lg: '3xl' }}
//         // put a line after each element
//         __css={{
//           '& > * + *': {
//             borderLeft: '0.1rem solid #fff',
//             paddingRight: '2rem',
//           },
//           '& > *': {
//             padding: '0 2rem',
//           },
//         }}
//       >
//         <Text as={Link} color='#fff'>
//           Home
//         </Text>
//         <Text as={Link} color='#fff'>
//           About Us
//         </Text>
//         <Text as={Link} color='#fff'>
//           Services
//         </Text>
//         <Text as={Link} color='#fff'>
//           Contact Us
//         </Text>
//         <Text
//           as={Link}
//           href='https://www.freeprivacypolicy.com/live/bfdcd91f-c502-4125-ba06-5b3bf780ca4b'
//         >
//           Privacy Policy
//         </Text>
//       </Stack>
//       <Divider />
//       <Stack>
//         <Stack fontSize={{ sm: '2s', md: '2xl', lg: '2xl' }} direction='row' fontWeight='bold' color='#fff'>
//           <Stack direction='row' align='center'>
//             <FaCopyright />
//             <Text as='span' ml='2'>
//               2023
//             </Text>
//           </Stack>
//           <Text>Ghumantu Inc.</Text>
//           <Text>
//             All Rights Reserved
//           </Text>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default LandingFooter

import React from "react";
import {
  Divider,
  Link,
  Stack,
  Text,
  Image
} from '@chakra-ui/react'
import { FaCopyright, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai"
const LandingFooter = () => {
  return (
    <Stack as="footer" role="contentinfo" w="full"
      padding='8'
      color='#fff'
      bgColor={'#04151A'}
      justify='center'
      align='center'
      spacing={8}
      fontFamily='Dm Sans'
    >
      <Stack>
        <Image src={"landing-page/footerLogo.png"} alt="logo" />
      </Stack>
      <Stack justify='center' align='center'>
        <Text fontSize={['15px', '24px', '25px']} w='100%' textAlign='center' color='#fff'>
          Plan a perfect adventure with our travel planning tool
        </Text>
      </Stack>
      <Stack direction={['column', 'column', 'row']} spacing={10}
        justify='center'
        fontSize={['15px', '24px', '25px']}
        // put a line after each element
        __css={{
          '& > * + *': {
            borderLeft: '0.1rem solid #fff',
            paddingRight: '2rem',
          },
          '& > *': {
            padding: '0 2rem',
          },
          // remove the line in phone view
          '@media screen and (max-width: 30em)': {
            '& > * + *': {
              borderLeft: 'none',
              paddingRight: '0',
            },
            '& > *': {
              padding: '0',
            },
          }
        }}
      >
        <Text as={Link} color='#fff'>
          Home
        </Text>
        <Text as={Link} color='#fff'>
          About Us
        </Text>
        <Text as={Link} color='#fff'>
          Services
        </Text>
        <Text as={Link} color='#fff'>
          Contact Us
        </Text>
        <Text
          as={Link}
          href='https://www.freeprivacypolicy.com/live/bfdcd91f-c502-4125-ba06-5b3bf780ca4b'
        >
          Privacy Policy
        </Text>
      </Stack>
      <Divider />
      <Stack>
        <Stack fontSize='2xl' direction={['column', 'column', 'row']} fontWeight='bold' color='#fff'>
          <Stack direction='row' justifyContent='center' align='center'>
            <FaCopyright />
            <Text as='span' ml='2'
              textAlign={['center', 'center', 'left']}
            >
              2023
            </Text>
          </Stack>
          <Text>Ghumantu Inc.</Text>
          <Text>
            All Rights Reserved
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LandingFooter
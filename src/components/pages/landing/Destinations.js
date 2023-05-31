import {
  Box, Heading,
  Text, Image,
  Flex, Button,
  Stack, Tag, TagLabel, TagRightIcon
} from "@chakra-ui/react";

import { useState } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi"
import { MdPeopleAlt } from "react-icons/md"

import jaipur from '../../../assets/cities/jaipur.jpg'
import goa from '../../../assets/cities/goa.jpg'
import manali from '../../../assets/cities/manali.jpg'
import jammuKashmir from '../../../assets/cities/jammu-kashmir.jpg'
import prayagraj from '../../../assets/cities/prayagraj.webp'
import kerala from '../../../assets/cities/kerala.jpg'

export const destinations = [
  {
    "heading": "Jaipur in 3 days",
    "desc": "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color.",
    "location": "Rajasthan",
    "people": "6.4k",
    "rating": "4.5",
    "img": jaipur,
    "isVerified": true,
    "category": "recommended"
  },
  {
    "heading": "Goa in 3 days",
    "desc": "Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture.",
    "location": "Panaji",
    "people": "5.4k",
    "rating": "4.5",
    "img": goa,
    "isVerified": true,
    "category": "local"
  },
  {
    "heading": "Manali in 4 days",
    "desc": "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
    "location": "Himachal Pradesh",
    "people": "5.4k",
    "rating": "4.5",
    "img": manali,
    "isVerified": true,
    "category": "recommended"
  },
  {
    "heading": "Kashmir in 5 days",
    "desc": "Kashmir is an epitome of natural beauty, and it is renowned the world over for that. You can soak your senses on the many lakes, gardens and hill stations that attract thousands of tourists every year.",
    "location": "Jammu & Kashmir",
    "people": "5.4k",
    "rating": "4.5",
    "img": jammuKashmir,
    "isVerified": true,
    "category": "places"
  },
  {
    "heading": "Prayagraj in 2 days",
    "desc": "Prayagraj is a city in Uttar Pradesh state, north India. It’s at the confluence of the Ganges, Yamuna and Saraswati rivers. It’s known for sites at their sangam (confluence) including the riverside Ardh Kumbh Mela.",
    "location": "Uttar Pradesh",
    "people": "5.4k",
    "rating": "4.5",
    "img": prayagraj,
    "isVerified": true,
    "category": "recommended"
  },
  {
    "heading": "Kerala in 5 days",
    "desc": "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals.",
    "location": "Kerala",
    "people": "6.4k",
    "rating": "3.5",
    "img": kerala,
    "isVerified": true,
    "category": "recommended"
  }
]
const Destinations = () => {
  const [wish, setWish] = useState(false)
  return (

    <Box w={['100%', '100%', '85%']}
      mx={'auto'}
      p={['2rem', '2rem', '0']}
    >
      <Box textAlign='center' my={10}>
        <Heading as={'h2'} my={'20px'} fontSize={"2rem"}>Most Vistited{' '}<Text as={'span'} color={"#19b6e0"}>Destinations</Text> </Heading>
        <Text as={'p'} fontSize={"1.2rem"} my={'20px'} color={"#666"}> Some of the most loved itineraries by our travelers, and sooner you'll able to experience the essence of traveling with us.</Text>
      </Box>
      <Flex flexDir={['column', 'column', 'row']}
        justifyContent={'space-between'}
        alignItems='flex-start'
        wrap={'wrap'}>
        {destinations.map((destination, index) => (
          <Flex
            flexDirection={'column'}
            position='relative'
            mx={['0', '0', '1.4rem']}
            width={['100%', '100%', '22rem']}
            justifyContent={'space-between'}
            key={index}
            borderRadius={'8px'}
            overflow={'hidden'}
            transition={'ease-in'}
            height={'670px'}
            border={'2px solid #dfdfdf'}
            _hover={{
              boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.25)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Box as="div" w='100%' height={'10rem'}>
              <Image width={['inherit']} height={['280px', '300px', '200px']}
                objectFit='cover'
                src={destination?.img.src} alt="card image" />
            </Box>
            <Box position='absolute' left='0.5rem' top='1rem' width='95%'>
              <Stack
                direction={'row'}
                justify={'space-between'}
                align='center'
                py={'0.2rem'}
                px={'0'}
                w={'100%'}>
                <Stack direction={'row'} spacing={2}>
                  <Tag
                    size={"lg"}
                    borderRadius={'2.4rem'}>
                    <TagLabel>Exclusive ⚡</TagLabel>
                  </Tag>
                  <Tag
                    size={"lg"}
                    borderRadius={'2.4rem'}>
                    <TagLabel>Verified</TagLabel>
                    <TagRightIcon as={GoVerified} />
                  </Tag>
                </Stack>
                <Button borderRadius={'100%'}
                  onClick={() => {
                    setWish(!wish);
                  }}
                  className="destination_Card_WishlistWrap btn"
                >
                  {wish ? (
                    <AiFillHeart className="blue destination_Card_WishlistBtn" />
                  ) : (
                    <AiOutlineHeart className="blue destination_Card_WishlistBtn" />
                  )}
                </Button>
              </Stack>
            </Box>
            {/* //--------------------------------- Destination Card Content --------------------------- */}
            <Box className="destination_CardContent" m='1rem'>
              <Text fontSize='1.8rem' my={'10px'}
                __css={{
                  fontWeight: '700',
                  lineHeight: '140%',
                  letterSpacing: '0.5px',
                }}
              >
                {destination?.heading}
              </Text>
              <Box className="destination_Card--para" h='170px' fontSize={['1rem', '1rem', '1.2rem']}>{destination?.desc}</Box>
              {/* //--------------------------------- Card info stats --------------------------- */}
              <Flex
                color='#666666'
                gap={'30px'}
                my={'15px'}
                className="destination_CardStats" >
                <Flex as={'span'}
                  alignItems='center'
                  fontSize={'20px'}
                >
                  <HiLocationMarker className="destination_CardStats--icon" size={'20px'} />
                  <Text color='#666666' fontSize={['sm', 'sm', 'md']}>{destination.location}</Text>
                </Flex>
                <Flex as={'span'} className="destination_CardStats--profiles" flexDir={'row'} alignItems='center'>
                  <MdPeopleAlt size={'20px'} className="destination_CardStats--icon" />{' '}
                  <Text color='#666666' fontSize={['sm', 'sm', 'md']}>
                    {destination.people}
                  </Text>
                </Flex>
                <Flex as={'span'} className="destination_CardStats--rate" fontSize={'20px'} alignItems='center'>
                  <AiFillStar size={'20px'} className="destination_CardStats--icon yellow" />
                  <Text color='#666666' fontSize={['sm', 'sm', 'md']}>{destination.rating}</Text>
                </Flex>
              </Flex>
              {/* //--------------------------------- Card CTA --------------------------- */}
              <Box>
                <button className="btn btn-getStarted" style={{ width: '90%', marginBottom: '0px', marginTop: '0px' }}>
                  Notify Me
                </button>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>

  );
};

export default Destinations;

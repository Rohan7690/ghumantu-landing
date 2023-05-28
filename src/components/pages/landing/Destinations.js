
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

    <Box py={'80px'}  >
      <Text as={'div'} align={"center"}>
        <Heading as={'h2'} my={'20px'}>Most Vistited{' '}<Text as={'span'} color={"#19b6e0"}>Destinations</Text> </Heading>
        <Text as={'p'} fontSize={'1.2rem'} color={"#666"}> Some of the most loved itineraries by our travelers, and sooner you'll able to experience the essence of traveling with us.</Text>
      </Text>
      <Flex flexDir={"row"} wrap={'wrap'} gap={'20px'} px={{ sm: '50px', md: "200px" }}>
        {destinations.map((destination, index) => (
          <Box
            key={index}
            _hover={{
              boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.25)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out'
            }}
            as="div" gap={"30px"} py={"20px"} >
            <Box as="div" w='100%' height={'26rem'}>
              <Image className="destination_Card--img" src={destination?.img.src} alt="card image" />
            </Box>
            {/* //--------------------------------- Destination Card tags --------------------------- */}
            <div className="destination_CardTagsFloat">
              <div className="destination_CardTags">
                <Stack direction='row' spacing={5}>
                  <Tag fontSize='2xl'
                    py={'0.8rem'} px={'1.5rem'}
                    borderRadius={'2.4rem'}>
                    <TagLabel>Exclusive ⚡</TagLabel>
                  </Tag>
                  <Tag
                    fontSize='2xl'
                    py={'0.8rem'} px={'1.5rem'}
                    borderRadius={'2.4rem'}>
                    <TagLabel>Verified</TagLabel>
                    <TagRightIcon as={GoVerified} />
                  </Tag>
                  {/* If this tag is in the property then only it will show */}
                  {/* {true && (
                          <span className="destination_CardTags_Tag1 destination_CardTags_Tag">
                            Exclusive ⚡
                          </span>
                        )}
                        {true && (
                          <span className="destination_CardTags_Tag2 destination_CardTags_Tag">
                            Verified <GoVerified className="blue" />
                          </span>
                        )} */}
                </Stack>
                {/* //--------------------------------- Button for wishlist --------------------------- */}
                <button
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
                </button>
              </div>
            </div>
            {/* //--------------------------------- Destination Card Content --------------------------- */}
            <div className="destination_CardContent">
              <div className="destination_Card--heading ">
                {destination?.name}
              </div>
              <div className="destination_Card--para">{destination?.description}</div>
              {/* //--------------------------------- Card info statss --------------------------- */}
              <div className="destination_CardStats">
                <span className="destination_CardStats--location">
                  <HiLocationMarker className="destination_CardStats--icon" />
                  {destinations.location}
                </span>
                <span className="destination_CardStats--profiles">
                  <MdPeopleAlt className="destination_CardStats--icon" />
                  {destinations.people}
                </span>
                <span className="destination_CardStats--rate">
                  <AiFillStar className="destination_CardStats--icon yellow" />
                  {destinations.rating}
                </span>
              </div>
              {/* //--------------------------------- Card CTA --------------------------- */}
              <button className="destination_FinNow_Btn findNow--btn btn">
                Find now
              </button>
            </div>
          </Box>
        ))}
      </Flex>
    </Box>

  );
};

export default Destinations;

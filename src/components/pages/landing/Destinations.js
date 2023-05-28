
import { Box, Card, Heading, Text, Image, Flex, Button, Stack, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi"
import { MdPeopleAlt } from "react-icons/md"

const destinations = [
  {
    name: "Jaipur in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Jaipur is the capital of India's Rajasthan state. It evokes the royal family that onceruled the region and that, in 1727, foundedwhat is now called the Old City, or 'PinkCity' for its trademark building color.",
  },
  {
    name: "Goa in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife,eclectic seafood, world-heritage listed architecture.",
  },
  {
    name: "Manali in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Manali is a high-altitude Himalayan resorttown in India's northern Himachal Pradeshstate. It has a reputation as a backpackingcenter and honeymoon destination.",
  },
  {
    name: "Kashmir in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Kashmir is an epitome of natural beauty, and it is renowned the world over for that. You can soak your senses on the many lakes, gardens and hill stations that attract thousands of tourists every year.",
  },
  {
    name: "Prayagraj in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Prayagraj is a city in Uttar Pradesh state, north India. It's at the confluence of theGanges, Yamuna and Saraswati rivers. It'sknown for sites at their sangam(confluence) including the riverside ArdhKumbh Mela.",
  },
  {
    name: "Kerala in 3 days",
    image: "landing-page/destination_card_img1.jpg",
    description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Seashoreline. It's known for its palm-linedbeaches and backwaters, a network of canals.",
  },
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
            {/* <Card key={destination.name} h={'610px'} w={"400px"} >
              <Flex flexDir={"column"} justifyContent={'space-around'}>
                <Image as={'img'} src={destination.image} height={"300px"} w={"100%"} />
                <Heading as={'h2'} size="md" my={'20px'} >{destination.name}</Heading>
                <Text as={"p"} my={'20px'}>{destination.description}</Text>
                <Button as={'button'} color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'} >Notify Me</Button>
              </Flex>
            </Card> */}
            <Box as="div" w='100%' height={'26rem'}>
              <Image className="destination_Card--img" src={destination?.image} alt="card image" />
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
                  {card.location}
                </span>
                <span className="destination_CardStats--profiles">
                  <MdPeopleAlt className="destination_CardStats--icon" />
                  {card.people}
                </span>
                <span className="destination_CardStats--rate">
                  <AiFillStar className="destination_CardStats--icon yellow" />
                  {card.rating}
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

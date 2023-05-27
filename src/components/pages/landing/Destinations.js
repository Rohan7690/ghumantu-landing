
import { Box, Card, Heading, Text, Image, Flex, Button} from "@chakra-ui/react";
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
  return (
    
      <Box py={'80px'}>
        <Text as={'div'}   align={"center"}>
        <Heading as={'h2'} my={'20px'}>Most Vistited{' '}<Text as={'span'} color={"#19b6e0"}>Destinations</Text> </Heading>
        <Text as={'p'} fontSize={'1.2rem'} color={"#666"}> Some of the most loved itineraries by our travelers, and sooner you'll able to experience the essence of traveling with us.</Text>
        </Text>
        <Flex flexDir={"row"} wrap={'wrap'} gap={'20px'} px={"200px"}>
        {destinations.map((destination) => (
          <Box as="div" gap={"30px"}  py={"20px"}>
            <Card key={destination.name} h={'610px'} w={"400px"}>
              <Image as={'img'} src={destination.image} height={"300px"} w={"100%"}/>
              <Heading as={'h2'} size="md" my={'20px'} >{destination.name}</Heading>
              <Text as={"p"} my={'20px'}>{destination.description}</Text>
              <Button as={'button'} color={'white'} background={"#19b6e0"} borderRadius={'100px'} h={'50px'} >Notify Me</Button>
            </Card>
          </Box>
          ))}
        </Flex>
      </Box>
    
  );
};

export default Destinations;

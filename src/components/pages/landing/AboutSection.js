
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
const aboutFeatures = [
  {
    heading: 'Realistic Budget',
    description: 'Plan your trip with confidence using our realistic budget calculator',
    iconUrl: 'landing-page/budgetIcon.png',
    iconAlt: 'Budget Icon',
  },
  {
    heading: 'Verified Routes',
    description: 'Discover authentic travel experiences with our verified routes.',
    iconUrl: 'landing-page/about_flight.png',
    iconAlt: 'Flight Icon',
  },
  {
    heading: 'Love for Locals',
    description: 'Support & Explore local businesses and communities while traveling',
    iconUrl: 'landing-page/about_local.png',
    iconAlt: 'Local Icon',
  }
];

const AboutSection = () => {
  return (
    <Box background={"#19b6e0"}
      p={['2rem', '2rem', '0']} textColor={"white"} py={['1rem', '4rem', "4rem"]} >
      <Box w={['100%', '100%', '85%']}
        mx={'auto'}>
        <Box textAlign={"center"} my={"2rem"}>
          <Heading as="h2" fontSize={"2rem"}>
            About Us
          </Heading>
          <Text fontSize={["1.1rem", '1.4rem', '1.4rem']} py={['0px', '10px', '20px']}>Plan your perfect itinerary and explore the world effortlessly with Ghumantu, your ultimate travel planning tool.</Text>
        </Box>
        <Flex maxW={"85rem"} margin={"0 auto"} flexDir={['column', 'column', 'row']}>
          <Box>
            <Image
              width={['100%', '100%', "630px"]}
              height={['400px', '400px', "758px"]}
              src="landing-page/about-img.jpg"
              alt='about-img'
              borderRadius={"5%"}
              border={"2px solid white"}
              m={['0', '0', "2rem"]}
            />
          </Box>
          <Box w={['100%', '100%', "50%"]} py={['1rem', '4rem', "4rem"]} px={['0px', '0px', "100px"]}>
            <Heading as="h3" fontSize={"2rem"} py={"20px"}>
              Why Choose Us
            </Heading>
            <Text fontSize={"1.1rem"} lineHeight={['1.2rem', '2rem', "2rem"]}>Ghumantu offers a curated travel experience that allows you to create your own itinerary on any budget. Our platform provides reliable information on local food, activities, and places, and our trip budget calculator helps you plan the perfect budget for your dream trip.</Text>
            <Box >
              {aboutFeatures.map((feature, index) => (
                <Flex my={"1.8rem"} key={index} >
                  <Image
                    width="100px"
                    height="100px"
                    src={feature.iconUrl}
                    alt={feature.iconAlt}
                    margin={"auto 0"}
                    p={"1rem"}
                  />
                  <Box >
                    <Heading as="h4" fontSize={"1.3rem"} mb={"0"}>
                      {feature.heading}
                    </Heading>
                    <Text fontSize={"1.1rem"} lineHeight={['1.2rem', '2rem', "2rem"]} mt={['2', '2', "4"]}>{feature.description}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
        <Flex maxW={"85rem"} margin={"0 auto"} py={['1rem', '4rem', "4rem"]} px={['20px', '50px', "100px"]} flexDir={['column', 'column', 'row']}>
          <Box w={['100%', '80%', "50%"]} m={"auto 0"} lineHeight={"2rem"}>
            <Heading as="h2" fontSize={"2rem"} py={"20px"}>
              Our Vision
            </Heading>
            <Text w={['100%', '100%', "80%"]} fontSize={"1.1rem"} lineHeight={['1.2rem', '2rem', "2rem"]} >Our goal is to empower travelers to explore the world in a way that is meaningful, transformative, and fulfilling. Whether you're looking to discover hidden gems off the beaten path, connect with locals and experience new cultures firsthand, or simply relax and unwind in a beautiful destination, we are here to help you make it happen. So why wait? Start planning your next adventure today, and let us help you make your travel dreams a reality.</Text>
          </Box>
          <Box >
            <Image
              objectFit={"contain"}
              width={['400px', '500px', "648"]}
              height={['400px', '400px', "550px"]}
              src="landing-page/about_who_we.png"
              alt=""
            />
          </Box>
        </Flex>
      </Box>

    </Box>
  );
};

export default AboutSection;

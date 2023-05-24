"use client"
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
    <Box background={"#19b6e0"} textColor={"white"} py={"4rem"}>
      {/* <Box textAlign={"center"} my={"2rem"}>
        <Heading as="h2" fontSize={"2rem"}>
          About Us
        </Heading>
        <Text fontSize={"1.3rem"}>Plan your perfect itinerary and explore the world effortlessly with Ghumantu, your ultimate travel planning tool.</Text>
      </Box> */}
      {/* <Flex maxW={"85rem"} margin={"0 auto"}>
        <Flex >
          <Box>
            <Image
              width="630px"
              height="758px"
              src="landing-page/about-img.jpg"
              alt='about-img'
              borderRadius={"5%"}
              border={"2px solid white"}
              m={"2rem"}
            />

          </Box>
          <Box w={"50%"} py={"4rem"}>
            <Heading as="h3" fontSize={"1.8rem"}>
              Why Choose Us
            </Heading>
            <Text fontSize={"1.3rem"} lineHeight={"2rem"}>Ghumantu offers a curated travel experience that allows you to create your own itinerary on any budget. Our platform provides reliable information on local food, activities, and places, and our trip budget calculator helps you plan the perfect budget for your dream trip.</Text>
            <Box >
              {aboutFeatures.map((feature,index) => (
                <Flex my={"1.8rem"} key={index}>
                  <Image
                    width="64"
                    height="64"
                    src={feature.iconUrl}
                    alt={feature.iconAlt}
                    margin={"auto 0"}
                    p={"1rem"}
                  />
                  <Box >
                    <Heading as="h4" fontSize={"1.3rem"} mb={"0"}>
                      {feature.heading}
                    </Heading>
                    <Text fontSize={"1.2rem"} mt={"4"}>{feature.description}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex maxW={"85rem"} margin={"0 auto"} py={"4rem"}>
        <Box w={"50%"} m={"auto 0"} lineHeight={"2rem"}>
          <Heading as="h2" >
            Our Vision
          </Heading>
          <Text w={"80%"}>Our goal is to empower travelers to explore the world in a way that is meaningful, transformative, and fulfilling. Whether you're looking to discover hidden gems off the beaten path, connect with locals and experience new cultures firsthand, or simply relax and unwind in a beautiful destination, we are here to help you make it happen. So why wait? Start planning your next adventure today, and let us help you make your travel dreams a reality.</Text>
        </Box>
        <Box >
          <Image
            width="648"
            height="550"
            src="landing-page/about_who_we.png"
            alt=""
          />
        </Box>
      </Flex> */}
    </Box>
  );
};

export default AboutSection;

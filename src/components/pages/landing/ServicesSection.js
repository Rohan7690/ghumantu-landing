
import { Box, Heading, Flex, Button, Text, Image } from "@chakra-ui/react";
import AOS from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box
      w={['100%', '100%', '85%']}
      mx={'auto'}
      my="10" >
      <Flex direction="column" textAlign={"center"} >
        <Box >
          <Heading as="h2" color="black" fontSize={"2rem"} alignContent={"center"} >
            <Text color={"#19b6e0"} display={"inline"} mr={"5px"} >Our Offerings </Text> To The Travelers
          </Heading>
          <Text color={"#666"} fontSize={"1.2rem"}>
            We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent='center' maxW={"124rem"} my={"3rem"} flexDir={['column', 'column', 'row']} >
        <Box lineHeight={"1.7"} height={"500px"} mr={"8rem"} w={['100%', '100%', '480px']} data-aos='fade-right' objectFit={'contain'}  >
          <Heading as="h3" color="black" fontSize={"2rem"} my={"20px"}>
            Budget Planner
          </Heading>
          <Text color={"#666"} fontSize={"1.1rem"} as='p' >
            Plan your dream trip easily using our <Text as='span' color={"#19b6e0"} display={"inline"}>Budget Planner</Text>. Estimate all your travel expenses, including accommodation, food, and transportation, to ensure your trip fits your budget. Whether you're a budget traveler or seeking a luxurious experience, our tool is here to help.
          </Text>
          <Button border={"none"} fontSize={"1rem"} borderRadius={"100px"} h={"50px"} mt={"20px"} w={"100px"} color={"white"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
            Notify Me
          </Button>
        </Box>
        <Box>
          <Image
            objectFit={"contain"}
            width="500px"
            height="480px"
            src="landing-page/service_budget.png"
            alt="service_img"
            data-aos='fade-left'
          />
        </Box>
      </Flex>
      <Flex justifyContent='center' maxW={"124rem"} gap={[5, 10, 20]} my={"3rem"}
        flexDir={['column-reverse', 'column-reverse', 'row']}>
        {/* Left Box */}
        <Box>
          <Image
            objectFit={"contain"}
            width="500px"
            height="480px"
            src="landing-page/service_route.png"
            alt="service_img"
            data-aos='fade-right'
          />
        </Box>
        {/* Right Box */}
        <Box lineHeight={"1.7"} height={"500px"} w={['100%', '100%', '480px']} data-aos='fade-left'>
          <Heading as="h3" color="black" fontSize={"2rem"} my={"20px"} >
            Route Mapping
          </Heading>
          <Text as='p' color={"#666"} fontSize={"1.1rem"}>
            Discover curated travel itineraries for every spot in your travels, creating a unique travel experience that sets us apart from generic mapping tools like Google Maps. Our
            <Text as='span' color={"#19b6e0"} display={"inline"}>one-way maps</Text> guide you to the best spots, allowing you to explore like a local insider.
          </Text>
          <Button border={"none"} fontSize={"1rem"} borderRadius={"100px"}
            h={"50px"} mt={"20px"} w={"100px"} color={"white"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"} >
            Notify Me
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent='center' maxW={"124rem"} my={"3rem"} flexDir={['column', 'column', 'row']}>
        <Box lineHeight={"1.7"} height={"500px"} mr={"8rem"} w={['100%', '100%', '480px']} data-aos='fade-right'>
          <Heading as="h3" color="black" fontSize={"2rem"} my={"20px"}>
            Local search engine
          </Heading>
          <Text as='p' color={"#666"} fontSize={"1.1rem"}>
            Experience the essence of your next vacation by exploring the local flavors of your destination with our
            <Text as='span' color={"#19b6e0"} display={"inline"}>comprehensive search engine</Text>. Find the best local restaurants, places to visit, and activities to do, and discover must-try dishes that will make your trip unforgettable.
          </Text>
          <Button border={"none"} fontSize={"1rem"} borderRadius={"100px"} h={"50px"} mt={"20px"} w={"100px"} color={"white"} background={"linear-gradient(93.01deg,#14cdff .65%,#00c2ff)"}>
            Notify Me
          </Button>
        </Box>
        <Box data-aos='fade-left'>
          <Image
            width={['100%', '100%', "480px"]}
            height="480px"
            src="landing-page/service_search.png"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default ServicesSection;

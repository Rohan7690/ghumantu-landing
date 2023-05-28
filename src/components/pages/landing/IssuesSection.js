
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import AOS from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
const listitem =()=>[
  {
    Itemimg:'',
    ItemHeading:'',
    Itempara:'',
    
  }
]
const IssuesSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Box px={{sm:'50px',md:'100px',lg:"230px"}} my={"5rem"} data-aos='fade-up'>
      <Flex direction="column" margin={"0 auto"}  maxW={"40rem"} textAlign={"center"} mb={"1rem"}>
        <Box alignContent={"center"} justifyContent={"center"}  my={"50px"}>
          <Heading as="h2" color="black" fontSize={"2rem"} alignContent={"center"} >
            <Box color={"#19b6e0"} display={"inline"} mr={"10px"} >
              Issues
            </Box>
            Encountered By Travellers
          </Heading>
          <Text color={"#666"} fontSize={"1.2rem"}>
            Common Issues faced by travelers throughout the course of their trip from the planning stages to the end of their journey
          </Text>
        </Box>
      </Flex>
      <Flex color={"#666"} gap={"30"} lineHeight={"30px"} flexDir={{sm:'column',md:'column',lg:'row'}}>
        <Box width={"380px"} height={"300px"} backgroundImage={"landing-page/feature_card_bg1.png"} border={"2px solid hsla(0,0%,40%,.1)"} borderRadius={"10px"} pt={"30"} pl={"10px"}>
          <Image
            width="72px"
            height="72px"
            src="landing-page/feature_card_budget.png"
            alt="budget_img"
          />
          <Box  mt={"20px"} fontSize={"1.1rem"}>
            The whole travel experience gets disheartening when you can't make the plans according to your budget and do not able to find any option where you can plan your trip along with
            <Text color={"#19b6e0"} display={"inline"}> budget calculation</Text>
          </Box>
        </Box>
        <Box width={"380px"} height={"300px"} flexDir={{sm:'column-reverse',md:'column-reverse',lg:'row'}} backgroundImage={"landing-page/feature_card_bg2.png"} border={"2px solid hsla(0,0%,40%,.1)"} borderRadius={"10px"} pt={"30px"} pl={"10px"}>
          <Image
            width="72px"
            height="72px"
            src="landing-page/feature_card_route.png"
            alt="route_img"
          />
          <Box  mt={"20px"} fontSize={"1.1rem"} as='p' >
              Whenever we plan a trip to a new place, we all want to know the best tourist destinations of that place but do not able to get the right placements of the destinations on a
              <Text as='span' color={"#19b6e0"} display={"inline"}> single route</Text>.
          </Box>
        </Box>
        <Box width={"380px"} height={"300px"} backgroundImage={"landing-page/feature_card_bg3.png"} border={"2px solid hsla(0,0%,40%,.1)"} borderRadius={"10px"} pt={"30"} pl={"10px"}>
          <Image
            width="72px"
            height="72px"
            src="landing-page/feature_card_local.png"
            alt="local_img"
          />
          <Box  mt={"20px"} fontSize={"1.1rem"}>
            Exploring the authentic local food, activities, and places is a vital part of any travel experience, but it can be challenging to find reliable information even from the most{" "}
            <Text color={"#19b6e0"} display={"inline"}>knowledgeable place</Text>.
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default IssuesSection;

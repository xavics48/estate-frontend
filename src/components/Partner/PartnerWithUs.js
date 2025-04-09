import React from "react";
import { Box, Text, VStack,Grid, Image } from "@chakra-ui/react";

import { ReactComponent as Partner1 } from "../../images/Partner/partner1.svg";
import { ReactComponent as Partner2 } from "../../images/Partner/partner2.svg";
import { ReactComponent as Partner3 } from "../../images/Partner/partner3.svg";
import { ReactComponent as Partner4 } from "../../images/Partner/partner4.svg";

const partnerBenefits = [
  {
    title: "Smart Dashboard",
    description: "Track deals & payments in one place",
    image: <Partner1 />
  },
  {
    title: "Instant Notifications",
    description: "Stay updated effortlessly",
    image: <Partner2 />
  },
  {
    title: "Exclusive Property Access",
    description: "Early insights on EstateOne listing",
    image: <Partner3 />
  },
  {
    title: "Secure Transactions",
    description: "Trust and transparency at every step",
    image: <Partner4 />
  },
];

const PartnerWithUs = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 4, md: 20 }} textAlign="center">
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        Why Partner With Us?
      </Text>

      {/* Benefits Grid */}
      <Grid 
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} 
        gap={6} 
        mt={8} 
        maxW="1100px" 
        mx="auto"
        
      >
        {partnerBenefits.map((benefit, index) => (
          <VStack 
            key={index} 
            p={6} 
            bg="white" 
            borderRadius="lg" 
            boxShadow="md" 
            align="center" 
            textAlign="center" 
            spacing={4}
            width="100%"
          >
            {/* Image */}
            <Box boxSize={{ base: "50px", md: "60px" }}>
              {benefit.image}
            </Box>
            {/* Title */}
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
              {benefit.title}
            </Text>
          
            {/* Description */}
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              {benefit.description}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnerWithUs;

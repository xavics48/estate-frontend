import React from "react";
import { Box, Text, VStack, Grid, Button, Stack } from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "../Buttons";

import { ReactComponent as BuyIcon } from "../../images/whatwedo/buy_icon.svg";
import { ReactComponent as ManageIcon } from "../../images/whatwedo/manage_icon.svg";
import { ReactComponent as SaleIcon } from "../../images/whatwedo/sale_icon.svg";

const WhatWeDo = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center">
      <Text 
        bg="#F6F7DD" 
        color="#DA990E" 
        fontSize="sm" 
        fontWeight="bold" 
        px={4} 
        py={1} 
        borderRadius="full"
        display="inline-block"
      >
        WHAT WE DO
      </Text>

      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        Your All-in-One Real Estate Solution
      </Text>

      <Text fontSize="md" color="gray.700" mt={3} maxW="950px" mx="auto">
        From finding the perfect property to handing over the keys, we're with you every step of the way...
      </Text>

      <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={4} w="full" align={{ base: "center", md: "start" }} justify="center">
        <PrimaryButton text="Book a free call" isPopover={true} />
        <SecondaryButton text="Whatsapp Us" to="/whatsapp" />
      </Stack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mt={10} maxW="1200px" mx="auto">
        {services.map((service, index) => (
          <Box key={index} sx={styles.card}>
            {/* Render the correct Icon component based on the service */}
            {service.icon === "buy" && <BuyIcon />}
            {service.icon === "manage" && <ManageIcon />}
            {service.icon === "sale" && <SaleIcon />}

            <Button bg="yellow.100" color="yellow.700" fontSize="sm" fontWeight="bold" borderRadius="full" px={4} py={1} _hover={{ bg: "yellow.200" }}>
              {service.buttonText}
            </Button>

            <VStack spacing={2} align="start">
              <Text fontSize="lg" fontWeight="bold">{service.title}</Text>
              <Text fontSize="sm" color="gray.600">{service.description}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

// Service Cards Data
const services = [
  { 
    title: "Discover Tailored Property Solutions for You", 
    icon: "buy",
    buttonText: "BUY",
    description: "Whether you're seeking your dream home, investment property, or commercial space, our experts provide personalized guidance to help you make an informed decision based on your needs."
  },
  { 
    title: "Let Us Manage Your Property, Maximize Your Returns", 
    icon: "manage",
    buttonText: "MANAGE",
    description: "We take care of everything—from finding tenants and managing rent to handling finances and ensuring everything is compliant. Let us make your property profitable and stress-free"
  },
  { 
    title: "Sell Your Property with Confidence", 
    icon: "sale",
    buttonText: "SELL",
    description: "Get the right value for your property with our transparent, end-to-end selling services. We provide honest market evaluations and connect you with genuine buyers, ensuring a smooth and rewarding selling experience."
  }
];


// Card Styles
const styles = {
  card: {
    bg: "yellow.50",
    borderRadius: "12px",
    boxShadow: "md",
    p: 6,
    textAlign: "left",
    spacing: 4,
    width: "100%",
    transition: "all 0.3s ease",
    _hover: {
      transform: "translateY(-5px)",
      boxShadow: "lg",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  }
};

export default WhatWeDo;

import React, { useRef } from "react";
import { Box, Text, VStack, HStack, Button, List, ListItem, Icon, Grid } from "@chakra-ui/react";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { PrimaryButton } from "../Buttons";

const MotionButton = motion(Button);

const HowWeWork = () => {
  const manageRef = useRef(null);
  const sellRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    {
      title: "BUY",
      color: "yellow.500",
      items: [
        "Schedule a Consultation (Meet 1)",
        "Explore Market & Investment Areas",
        "Property Tour with our Advisor",
        "Strategic Planning Session (Meet 2)",
        "Negotiate & Secure the Best Deal",
        "Ongoing CRM support and insights",
        "Property updates and market trends",
        "Pre-Possession Inspection*",
      ],
      ctaText: "Book a free call",
      ctaLink: "/buy",
      subActions: [
        { text: "Generate Income?", action: () => handleScroll(manageRef) },
        { text: "Self-Use", action: null },
        { text: "Sell & Exit", action: () => handleScroll(sellRef) },
      ],
    },
    {
      title: "MANAGE",
      ref: manageRef,
      color: "yellow.500",
      items: [
        "Schedule a Consultation (Meet 1)",
        "Define your Objectives: Long Term Rental Income or Short Term Rental Income",
        "Property Inspection & Assessment",
        "For Long-Term Rentals: Tenant Screening & Maximized Rental Listings",
        "For Short-Term Rentals:Complete Setup & Strategic Listings",
        "Management & Monitoring: For Long-Term Rentals: Secure Rent Collection & Property Maintenance.",
        "For Short-Term Rentals: Streamlined Guest Coordination & Dynamic Pricing",
        "Maximize Income Potential",
        "Generate consistent income",
      ],
      ctaText: "Book a free call",
      ctaLink: "/manage",
      subActions: [],
    },
    {
      title: "SELL",
      ref: sellRef,
      color: "yellow.500",
      items: [
        "Schedule a consultation (Meet 1)",
        "EstateOne Approval & Strategic Collaboration",
        "Property Tour with our Advisor",
        "Evaluate Market Value & Finalize Selling Price",
        "Targeted Marketing Exposure",
        "Qualified Buyer Screening",
        "Organise Property Showings",
        "Facilitate Buyer Negotiations",
        "Finalize & Close the Sale",
      ],
      ctaText: "Book a free call",
      ctaLink: "/sell",
      subActions: [],
    },
  ];

  return (
    <Box as="section" id="howwework" py={{ base: 5, md: 20 }} px={{ base: 5, md: 20 }} textAlign="center">
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        Your Real Estate Roadmap
      </Text>
      <Text fontSize="md" color="gray.600" maxW="700" mx="auto" mt={3}>
        We make real estate easy. At EstateOne, our roadmap takes you from where you are to where you want to be—
        quickly, confidently, and seamlessly.
      </Text>

      {/* Responsive Grid Layout */}
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={8} mt={10} maxW="1100px" mx="auto">
        {sections.map((section, index) => (
          <VStack
            key={index}
            ref={section.ref}
            p={2}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            align="start"
            textAlign="left"
            spacing={4}
            h="full"
          >
            
            <Text fontSize="xl" fontWeight="bold" color={section.color}>
              {section.title}
            </Text>

            <List spacing={3} flex="1">
              {section.items.map((item, i) => (
                <ListItem key={i} display="flex" alignItems="center">
                <Icon as={FaChevronDown} color={section.color} mr={2} />
                <Box
                  as="span"
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(/Long[- ]Term Rentals/gi, "<strong>Long-Term Rentals</strong>")
                      .replace(/Short[- ]Term Rentals/gi, "<strong>Short-Term Rentals</strong>")
                  }}
                />
              </ListItem>
              ))}
            </List>

            {section.subActions.length > 0 && (
              <HStack spacing={3} mt={4}>
                {section.subActions.map((actionObj, i) => (
                  <MotionButton
                    key={i}
                    bg="#F8F1E7"
                    color="black"
                    borderRadius="lg"
                    _hover={{ bg: "#f5e5d5" }}
                    size="sm"
                    px={4}
                    whileTap={{
                      scale: 0.9,
                      backgroundColor: "#333",
                      transition: { type: "spring", stiffness: 200 },
                    }}
                    onClick={actionObj.action}
                  >
                    {actionObj.text}
                  </MotionButton>
                ))}
              </HStack>
            )}

            {/* Call to Action Button */}
            <PrimaryButton 
              text={section.ctaText}
              to={section.ctaLink} 
              isPopover={true} 
              leftIcon={<FaCalendarAlt />} 
              width="full" 
              mt={4}
            />
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeWork;

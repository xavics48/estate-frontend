import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";
import SchedulePopover from "./SchedulePopover"; // ✅ Import SchedulePopover

export default function PropertyAdvicePopover({ isOpen, onClose }) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false); // ✅ State for Schedule Popover
const whatsappUrl = "https://wa.me/918368626797";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "lg" }} isCentered>
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          p={0}
          borderRadius="xl"
          boxShadow="2xl"
          maxW={{ base: "95%", md: "600px" }}
          bg="#FAF8F5"
          textAlign="center"
        >
          <ModalCloseButton position="absolute" top={4} right={4} />
          <Box bgGradient="linear(to-b, #FDF3E3, #FAF8F5)" borderTopRadius="xl" p={6}>
            <Image src="/images/imagePopover2.svg" alt="Property Advice" boxSize={{ base: "80px", md: "100px" }} mb={4} mx="auto" />
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={2}>
              Get Personalized Property Advice!
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} maxW={{ base: "90%", md: "510px" }} mx="auto" mb={4}>
              Looking for guidance on finding the perfect home or navigating market trends? We're here to help—quick, easy, and personalized just for you!
            </Text>
          </Box>
          <ModalBody p={6}>
            <Flex direction={{ base: "column", md: "row" }} gap={4} w="100%" justify="center">
              <Box
              
                p={4}
                borderRadius="lg"
                boxShadow="md"
                bg="#FFFFFF"
                w={{ base: "100%", md: "48%" }}
                textAlign="left"
              >
                <Flex align="center" gap={2} mb={2}>
                  <Image src="/images/contact_agent.svg" alt="Call Icon" boxSize="35px" />
                  <Text fontWeight="bold">Get on a Call with Us</Text>
                </Flex>
                <Text fontSize="sm" color="gray.600" mb={3}>
                  We have 150+ slots available daily. Choose a time, and we’ll call you at your convenience.
                </Text>
                <Button
  bg="yellow.500"
  w="full"
  color={"white"}
  _hover={{ bg: "yellow.600" }}
  leftIcon={<FaRegCalendarAlt />}
   _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
  onClick={() => {
    onClose(); // Close the current PropertyAdvicePopover
    setTimeout(() => setIsScheduleOpen(true), 200); // Open SchedulePopover after a small delay
  }}
>
  Pick a suitable time
</Button>

              </Box>
              <Box
              
                p={4}
                borderRadius="lg"
                boxShadow="md"
                bg="#FFFFFF"
                w={{ base: "100%", md: "48%" }}
                textAlign="left"
              >
                <Flex align="center" gap={2} mb={2}>
                  <Image src="/images/whatsapp_icon.svg" alt="WhatsApp Icon" boxSize="35px" />
                  <Text fontWeight="bold">Whatsapp us</Text>
                </Flex>
                <Text fontSize="sm" color="gray.600" mb={3}>
                  If you'd much rather prefer texting at your own pace, just hit us up on Whatsapp. 
                </Text>
                <Button bg="#25D366"  _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out" onClick={() => window.location.href = whatsappUrl}color="white" _hover={{ bg: "#1EBE5D" }} w="full" leftIcon={<FaWhatsapp />}>
                  Whatsapp us
                </Button>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* ✅ Schedule Popover */}
      <SchedulePopover isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </>
  );
}

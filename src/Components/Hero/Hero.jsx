import React, { useState, useEffect } from "react";
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import { Box, Button, Grid, Heading, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ImageList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % ImageList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + ImageList.length) % ImageList.length);
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      minH={{ base: "550px", sm: "650px" }}
      bg="gray.100"
      _dark={{ bg: "gray.800", color: "white" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      transition="background-color 0.2s"
    >
    
      <Box
        h="700px"
        w="700px"
        bg="blue.500"
        opacity="0.4"
        position="absolute"
        top="-50%"
        right="0"
        rounded="3xl"
        transform="rotate(45deg)"
        zIndex="-1"
      />

    
      <Box width="container.xl" pb={{ base: 8, sm: 0 }} position="relative">
        {ImageList.map((data, index) => (
          <Grid
            key={data.id}
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            gap={4}
            alignItems="center"
            opacity={index === currentSlide ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
            position={index === currentSlide ? "relative" : "absolute"}
            top={0}
            left={0}
            width="100%"
          >
          
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              gap={4}
              pt={{ base: 12, sm: 0 }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Heading
                fontSize={{ base: "5xl", sm: "6xl", lg: "7xl" }}
                fontWeight="bold"
                data-aos="zoom-out"
                data-aos-duration="100"
                data-aos-once="true"
              >
                {data.title}
              </Heading>
              <Text
                fontSize="sm"
                data-aos="fade-up"
                data-aos-duration="100"
                data-aos-delay="100"
              >
                {data.description}
              </Text>
              <Box
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <Button
                  onClick={handleOrderPopup}
                  bgGradient="linear(to-r, blue.500, teal.400)"
                  color="white"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all 0.2s"
                  py={2}
                  px={4}
                  rounded="full"
                >
                  Order Now
                </Button>
              </Box>
            </Box>

   
            <Box textAlign="center">
              <Image
                src={data.img}
                alt={data.title}
                width={{ base: "300px", sm: "450px" }}
                height={{ base: "300px", sm: "450px" }}
                objectFit="contain"
                mx="auto"
                transform={{ sm: "scale(1.05)", lg: "scale(1.2)" }}
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </Box>
          </Grid>
        ))}


        <Flex justifyContent="space-between" position="absolute" top="50%" width="100%" px={4}>
          <IconButton
            aria-label="Previous slide"
            icon={<FaChevronLeft />}
            onClick={prevSlide}
            variant="ghost"
            color="blue.500"
            _hover={{ bg: "whiteAlpha.200" }}
          />
          <IconButton
            aria-label="Next slide"
            icon={<FaChevronRight />}
            onClick={nextSlide}
            variant="ghost"
            color="blue.500"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
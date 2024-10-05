import { useEffect } from "react";
import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import AOS from "aos";
import BannerImg from "../../assets/4547829.jpg";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);

  return (
    <Box
      minH="550px"
      py={{ base: "12", sm: "0" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white" 
      _dark={{ bg: "gray.800" }} 
    >
      <Box w="container.xl">
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          gap={6}
          alignItems="center"
        >
         
          <Box data-aos="zoom-in" flex="1">
            <Image
              src={BannerImg}
              alt="Winter Sale Banner"
              maxW="400px"
              h="350px"
              w="full"
              mx="auto"
              objectFit="cover"
              borderRadius="md" 
              shadow="lg" 
            />
          </Box>

         
          <VStack flex="1" alignItems="flex-start" spacing={6}>
            <Text
              data-aos="fade-up"
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="bold"
              color="black" 
              _dark={{ color: "white" }} 
            >
              Winter Sale up to 50% Off
            </Text>
            <Text
              data-aos="fade-up"
              data-aos-delay="100"
              fontSize="md"
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="400px"
            >
              Take advantage of our huge winter sale. Stay warm with our stylish
              collection at unbeatable prices.
            </Text>
            <Flex gap={4}>
              
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <GrSecure size="24" />
                <Text>Secure Payments</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <IoFastFood size="24" />
                <Text>Freshly Cooked</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <GiFoodTruck size="24" />
                <Text>Fast Delivery</Text>
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Banner;

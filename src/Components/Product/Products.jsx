import React from 'react';
import Img1 from '../../assets/women2.jpg';
import Img2 from '../../assets/women4.jpg';
import Img3 from '../../assets/shirt3.png';
import Img4 from '../../assets/women3.jpg';
import { FaStar } from "react-icons/fa6";
import { Box, Button, Image, Text, Heading, Flex, VStack } from '@chakra-ui/react';

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Upto 50% off on all Women's Wear",
    price: 799,
    rating: 4.5,
    color: "red",
  },
  {
    id: 2,
    img: Img2,
    title: "Upto 50% off on all girls Wear",
    price: 799,
    rating: 4.5,
    color: "red",
  },
  {
    id: 3,
    img: Img3,
    title: "Upto 50% off on all Women's Wear",
    price: 799,
    rating: 4.5,
    color: "red",
  },
  {
    id: 4,
    img: Img4,
    title: "Upto 50% off on all Women's Wear",
    price: 799,
    rating: 4.5,
    color: "red",
  },
];

const Products = () => {
  return (
    <Box p={5}>
      <Heading
        as="h1"
        size="xl"
        mb={6}
        textAlign="center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Explore Our Products
      </Heading>

      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {ProductData.map((product) => (
          <VStack
            key={product.id}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src={product.img}
              alt={product.title}
              width="100%"
              height="350px"
              objectFit="cover"
            />
            <Box p={4} textAlign="center">
              <Text fontWeight="bold" fontSize="lg">
                {product.title}
              </Text>
              <Text fontSize="xl" color="teal.500">
                ${product.price}
              </Text>
              <Flex align="center" justify="center" mt={1}>
                <FaStar color={product.color} />
                <Text ml={1}>{product.rating}</Text>
              </Flex>
            </Box>
          </VStack>
        ))}
      </Box>
      
      <Button
        mt={8}
        colorScheme="teal"
        size="lg"
        px={10}
        display="block"
        mx="auto"
      >
        View All
      </Button>
    </Box>
  );
};

export default Products;

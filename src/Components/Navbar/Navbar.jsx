import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  Text,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import DarkMode from "./DarkMode";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <Box
      boxShadow="md"
      bg="white"
      _dark={{ bg: "gray.800", color: "white" }}
      transition="all 0.2s"
      zIndex="40"
      position="relative"
    >
      <Box bg="purple.700" py={2}>
        <Flex
          justify="space-between"
          align="center"
          maxW="container.lg"
          mx="auto"
        >
          <Flex align="center">
            <FiShoppingBag size={30} />
            <Text fontWeight="bold" fontSize="xl" ml={2}>
              Punjab-Woolen
            </Text>
          </Flex>

          <Flex align="center" gap={4}>
            <Box position="relative" display={{ base: "none", sm: "block" }}>
              <Input
                placeholder="Search"
                w="200px"
                transition="width 0.3s"
                _focus={{ borderColor: "purple.100", outline: "none" }}
                _hover={{ w: "300px" }}
                rounded="lg"
                border="1px"
                borderColor="gray.300"
                px={2}
                py={1}
                _dark={{ borderColor: "gray.500", bg: "gray.800" }}
              />
              <IconButton
                icon={<IoMdSearch />}
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
                right={2}
                bg="none"
                aria-label="Search"
              />
            </Box>

            <Button
              bgGradient="linear(to-r, purple.800, purple.600)"
              color="white"
              rounded="full"
              px={4}
              onClick={handleOrderPopup}
              _hover={{ bgGradient: "linear(to-r, purple.500, purple.700)" }}
            >
              Order
              <FaCartShopping style={{ marginLeft: "8px" }} />
            </Button>

            <DarkMode />
          </Flex>
        </Flex>
      </Box>

      <Box textAlign="center" data-aos="zoom-in">
        <HStack
          justify="center"
          spacing={4}
          display={{ base: "none", sm: "flex" }}
          py={2}
        >
          {navLinks.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              _hover={{ color: "purple.500" }}
              px={4}
            >
              {item.name}
            </Link>
          ))}

          <Menu>
            <MenuButton
              as={Link}
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap={1}
            >
              Trending Products
              <FaCaretDown />
            </MenuButton>
            <MenuList
              zIndex="9999"
              bg="white"
              shadow="md"
              borderRadius="md"
              _dark={{ bg: "gray.700" }}
            >
              {DropdownLinks.map((item) => (
                <MenuItem
                  key={item.id}
                  _hover={{ bg: "purple.100" }}
                  as={Link}
                  href={item.link}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import LightButton from "../../assets/light-mode-button.png";  // Light mode image
import DarkButton from "../../assets/dark-mode-button.png";   // Dark mode image

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();  // Chakra's hook for managing color modes

  return (
    <Box position="relative">
      {/* Light Mode Button */}
      <Image
        src={LightButton}               // Image for light mode
        alt="Light Mode"
        onClick={toggleColorMode}        // Switch to dark mode when clicked
        w="12"
        cursor="pointer"
        boxShadow="1px 1px 1px rgba(0,0,0,0.1)"
        transition="all 0.3s"
        position="absolute"
        right="0"
        zIndex="10"
        opacity={colorMode === "dark" ? "0" : "1"}   // Show only in light mode
      />

      {/* Dark Mode Button */}
      <Image
        src={DarkButton}               // Image for dark mode
        alt="Dark Mode"
        onClick={toggleColorMode}       // Switch to light mode when clicked
        w="12"
        cursor="pointer"
        boxShadow="1px 1px 1px rgba(0,0,0,0.1)"
        transition="all 0.3s"
        opacity={colorMode === "light" ? "0" : "1"}   // Show only in dark mode
      />
    </Box>
  );
};

export default DarkMode;

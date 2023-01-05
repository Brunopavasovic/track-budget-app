import { Box, Text, Heading } from "@chakra-ui/react";
import { DrawerForMobile } from "./DrawerForMobile";

export const TopNavMobile = () => {
  return (
    <Box
      fontFamily="Roboto , sans-serif"
      display={["flex", "flex", "none"]}
      alignItems="center"
      justifyContent="center"
      mt="20px"
      h="20vh"
    >
      <DrawerForMobile />

      <Box
        display=" flex"
        flexDirection="column"
        justifyContent="center"
        color="white"
        ml="100px"
      >
        <Text color="gray.200" fontSize="xs">
          TOTAL
        </Text>
        <Box display="flex" alignItems="center">
          <Text mt="10px">$</Text>
          <Heading fontWeight="thin">345</Heading>
        </Box>
        <Box borderRadius="5px" h="4px" w="70px" bg="red.300">
          <Box borderRadius="inherit" h="4px" w="30%" bg="blue"></Box>
        </Box>
        <Text color="gray.300" fontSize="xs">
          LEFT: 5,300$
        </Text>
      </Box>
    </Box>
  );
};

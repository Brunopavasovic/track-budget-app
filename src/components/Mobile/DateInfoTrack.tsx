import { Box, Text } from "@chakra-ui/react";

export const DateInfoTrack = () => {
  const now = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <Box display="flex" alignItems="center" w="full" bg="gray.100" h="30px">
      <Text ml="5%" fontSize="sm" fontWeight="semibold" color="gray.500">
        {now}
      </Text>
    </Box>
  );
};

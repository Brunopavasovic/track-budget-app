import { Box, Text } from "@chakra-ui/react";

interface DateProps {
  date: string;
}

export const DateInfoTrack = ({ date }: DateProps) => {
  return (
    <Box display="flex" alignItems="center" w="full" bg="gray.100" h="30px">
      <Text ml="5%" fontSize="sm" fontWeight="semibold" color="gray.500">
        {date}
      </Text>
    </Box>
  );
};

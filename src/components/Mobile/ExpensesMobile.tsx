import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { MdFastfood } from "react-icons/md";

export const ExpensesMobile = () => {
  return (
    <Fragment>
      <Box display={["flex", "flex", "none"]} flexDirection="column" h="full">
        <Box display="flex" alignItems="center" w="full" bg="gray.100" h="30px">
          <Text ml="5%" fontSize="sm" fontWeight="semibold" color="gray.500">
            Thursday, January 5
          </Text>
        </Box>
        <Flex mt="10px" alignItems="center" justifyContent="space-between">
          <Box
            p="5px"
            alignItems="center"
            justifyContent="space-evenly"
            display="flex"
            w="150px"
          >
            <MdFastfood color="green" />
            <Box>
              <Text fontWeight="semibold">Lunch</Text>
              <Text color="gray.400" mt="-5px" fontSize="sm">
                Restaurants
              </Text>
            </Box>
          </Box>
          <Box textAlign="center" w="20%">
            <Text fontWeight="semibold">2.50$</Text>
            <Text color="gray.400" mt="-5px" fontSize="sm">
              11:46
            </Text>
          </Box>
        </Flex>
        <Divider />
      </Box>
    </Fragment>
  );
};

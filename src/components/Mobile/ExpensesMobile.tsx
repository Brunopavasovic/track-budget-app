import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { MdFastfood } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";

import { useBudgetContext } from "../../BudgetItemsContext";
import { DateInfoTrack } from "./DateInfoTrack";

export const ExpensesMobile = () => {
  const { removeItem, splitItems } = useBudgetContext();

  return (
    <Box display={["flex", "flex", "none"]} flexDirection="column" h="full">
      {splitItems.map((dateItemArray) => {
        const [date, items] = dateItemArray;
        return (
          <Fragment key={date}>
            <DateInfoTrack date={date} />
            {items &&
              items.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <Flex
                      mr="10px"
                      mt="10px"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box
                        ml="10px"
                        p="5px"
                        alignItems="center"
                        display="flex"
                        w="150px"
                      >
                        <Box w="40px">
                          {item.category === "Groceries" ? (
                            <MdFastfood color="green" />
                          ) : (
                            <GiCommercialAirplane color="blue" />
                          )}
                        </Box>

                        <Box w="100%">
                          <Text fontWeight="semibold">{item.name}</Text>
                          <Text color="gray.400" mt="-5px" fontSize="sm">
                            {item.category}
                          </Text>
                        </Box>
                      </Box>
                      <Box textAlign="center" w="20%">
                        <Text
                          color="red.700"
                          fontWeight="semibold"
                        >{`-${item.amount}$`}</Text>
                        <Text color="gray.400" mt="-5px" fontSize="sm">
                          {item.date.split("T")[1].slice(0, 5)}
                        </Text>
                      </Box>
                      <Button
                        onClick={() => {
                          removeItem(item.id);
                        }}
                        size="sm"
                      >
                        X
                      </Button>
                    </Flex>

                    <Divider />
                  </Fragment>
                );
              })}
          </Fragment>
        );
      })}
    </Box>
  );
};

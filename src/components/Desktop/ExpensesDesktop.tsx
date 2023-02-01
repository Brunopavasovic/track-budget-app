import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useBudgetContext } from "../../BudgetItemsContext";

export const ExpensesDesktop = () => {
  const { splitItems } = useBudgetContext();
  return (
    <Box display={["none", "none", "table"]} w="100vw" h="100vh">
      {splitItems.map((expenses) => {
        const [date, items] = expenses;
        return (
          <Fragment>
            <Box ml="30px" bg="gray.200" w="max-content" mt="20px">
              {date}
            </Box>
            <Fragment>
              <TableContainer mt="50px">
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Category</Th>
                      <Th>Amount</Th>
                      <Th>Date</Th>
                      <Th color="red">Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((item) => {
                      return (
                        <Tr>
                          <Td>{item.name}</Td>
                          <Td>{item.category}</Td>
                          <Td>{`${item.amount}$`}</Td>
                          <Td>{item.date.split("T")[1].slice(0, 5)}</Td>
                          <Td>
                            <Button colorScheme="red">X</Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Fragment>
          </Fragment>
        );
      })}
    </Box>
  );
};

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
import React from "react";

export const ExpensesDesktop = () => {
  return (
    <Box display={["none", "none", "table"]} w="100vw" h="100vh">
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
            <Tr>
              <Td>Lunch</Td>
              <Td>Acomodation</Td>
              <Td>10e</Td>
              <Td>{Date.now()}</Td>
              <Td>
                <Button colorScheme="red">X</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

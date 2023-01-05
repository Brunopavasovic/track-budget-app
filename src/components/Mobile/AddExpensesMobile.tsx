import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";

export const AddExpensesMobile = () => {
  return (
    <Box
      height="full"
      flexDirection="column"
      display={["flex", "flex", "none"]}
      alignItems="center"
      h="full"
    >
      <VStack mt="100px" w="70%">
        <FormControl>
          <form>
            <Stack spacing={3}>
              <FormLabel>Item name:</FormLabel>
              <Input type="text" />
              <FormLabel>Select category:</FormLabel>
              <Select>
                <option>Groceries</option>
                <option>Travel</option>
              </Select>
              <FormLabel>Amount:</FormLabel>
              <Input type="number" />
              <Button>Add Item</Button>
            </Stack>
          </form>
        </FormControl>
      </VStack>
    </Box>
  );
};

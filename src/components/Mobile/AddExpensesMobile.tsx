import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useBudgetContext } from "../../BudgetItemsContext";
import { BudgetItems } from "../types/type";

export const AddExpensesMobile = () => {
  const { onSubmit } = useBudgetContext();
  const methods = useForm<BudgetItems>();

  return (
    <Box
      height="full"
      flexDirection="column"
      display={["flex", "flex", "none"]}
      alignItems="center"
      h="full"
    >
      <VStack mt="100px" w="70%">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <Stack spacing={3}>
              <FormLabel>Item name:</FormLabel>
              <Input {...methods.register("itemName")} type="text" />
              <FormLabel>Select category:</FormLabel>
              <Select {...methods.register("category")}>
                <option>Groceries</option>
                <option>Travel</option>
              </Select>
              <FormLabel>Amount:</FormLabel>
              <Input {...methods.register("amount")} type="number" />
              <Button>Add Item</Button>
            </Stack>
          </form>
        </FormProvider>
      </VStack>
    </Box>
  );
};

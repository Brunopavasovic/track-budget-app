import { FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const AddExpensesDesktop = () => {
  const methods = useForm();

  return (
    <VStack>
      <FormProvider {...methods}>
        <form>
          <FormLabel>Add expense</FormLabel>
          <Input type="text" />
          <FormLabel>Select Category</FormLabel>
          <Select>
            <option>Groceries</option>
            <option>Travel</option>
          </Select>
          <FormLabel>Amount</FormLabel>
          <Input type="number" />
        </form>
      </FormProvider>
    </VStack>
  );
};

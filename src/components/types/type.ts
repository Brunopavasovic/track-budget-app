import { ReactNode } from "react";

export interface BudgetContextType {
  onSubmit: (data: BudgetItems) => void;
  removeItem: (id: number) => void;
  items: BudgetItems[];
}

export interface BudgetItems {
  id: number;
  itemName: string;
  category: string;
  date: string;
  amount: number;
}

export type ShowItemsProviderProps = {
  children: ReactNode;
};

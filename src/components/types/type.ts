import { ReactNode } from "react";

export interface BudgetContextType {
  onSubmit: (data: BudgetItems) => void;
  removeItem: (id: number) => void;
  items: BudgetItems[];
  splitItems: Record<string, NewItemsType[]>;
}

export interface BudgetItems {
  id: number;
  name: string;
  category: string;
  date: string;
  amount: number;
}

export type NewItemsType = {
  date: string;
  items: BudgetItems[];
};

export type ShowItemsProviderProps = {
  children: ReactNode;
};

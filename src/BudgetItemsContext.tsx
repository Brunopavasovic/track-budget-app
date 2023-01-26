import { createContext, useContext, useEffect, useState } from "react";
import {
  BudgetContextType,
  ShowItemsProviderProps,
  BudgetItems,
} from "./components/types/type";

const savedItems = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

export const BudgetItemsContext = createContext<BudgetContextType | null>(null);
export const BudgetItemsProvider = ({ children }: ShowItemsProviderProps) => {
  const [items, setItems] = useState<BudgetItems[]>(savedItems);

  const current = new Date();
  const time = current.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const onSubmit = (data: BudgetItems) => {
    setItems((prev) => [...prev, { ...data, id: Date.now(), date: time }]);
  };

  const removeItem = () => {};

  return (
    <BudgetItemsContext.Provider value={{ onSubmit, removeItem, items }}>
      {children}
    </BudgetItemsContext.Provider>
  );
};

export const useBudgetContext = () => {
  const context = useContext(BudgetItemsContext);
  if (!context) {
    throw Error("Missing BudgetItemsProvider");
  }
  return context;
};

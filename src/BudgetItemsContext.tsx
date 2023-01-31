import { createContext, useContext, useEffect, useState } from "react";
import {
  BudgetContextType,
  ShowItemsProviderProps,
  BudgetItems,
  NewItemsType,
} from "./components/types/type";

const savedItems = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

export const BudgetItemsContext = createContext<BudgetContextType | null>(null);
export const BudgetItemsProvider = ({ children }: ShowItemsProviderProps) => {
  const [items, setItems] = useState<BudgetItems[]>(savedItems);
  const [splitItems, setSplitItems] = useState<Record<string, NewItemsType[]>>(
    {}
  );

  useEffect(() => {
    const spliting = items.reduce(
      (acc: Record<string, BudgetItems[]>, item) => {
        let key = item.date.split("T");
        const prev = acc[key[0]];
        return { ...acc, [key[0]]: [...(prev ?? []), item] };
      },
      {}
    ) as unknown as Record<string, NewItemsType[]>;
    const res = Object.entries(spliting);
    console.log(res);
    /* setSplitItems(res); */

    // aha... ok typescript ti je ponekad malo retardiran
    // u typescriptu Record<string, string> =/= {[key:string]: string}
    // zasto tko ce ga znati
    // ja sigurno ne znam
    // ali uglavnom ukoliko imas takav problem najbolje je napraviti ovo
    // eh sad uglavnom
    // ukoliko ikad trebas pretvarat uz Record<string, ...> moras
    // prvo pretvoriti u unknown
    // i to je onda to
    // to je jedan od onih shit stvari sto moras zapamtiti
    // mozda jednog dana fixaju ovo, ali vjv nece
    // msm u teoriji Record<string, string> =/= {[key:string]: string} je istinito
    // jer tipa mozes imati Record<string, string> === {[key: string]: string, [key2: string]: string} ovo je ekvivaletno
    // jer
    // { stringy: "string", stringy : "stringy"}: Record<string, string> = { stringy: "string", stringy : "stringy"}: {[key: string]: string, [key2: string]: string} vidis ovo je isti kurac
    // ali tip ovog moze biti
    // ok zao mi je sto sam te ubio u pojam
    // ali sada znas zasto je nesto nesto
    // goodluck ok tnx for help..nesto sam i saznao ipak
  }, [items]);

  let currentDate = new Date().toISOString();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const onSubmit = (data: BudgetItems) => {
    setItems((prev) => [
      ...prev,
      { ...data, id: Date.now(), date: currentDate },
    ]);
  };

  const removeItem = (id: number) => {
    const deleted = items.filter((item) => item.id !== id);
    setItems(deleted);
  };

  return (
    <BudgetItemsContext.Provider
      value={{ onSubmit, removeItem, items, splitItems }}
    >
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

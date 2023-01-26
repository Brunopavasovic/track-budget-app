import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExpensesMobile } from "./components/Mobile/ExpensesMobile";
import { AddExpensesMobile } from "./components/Mobile/AddExpensesMobile";
import { ExpensesDesktop } from "./components/Desktop/ExpensesDesktop";
import { BudgetItemsProvider } from "./BudgetItemsContext";

const App = () => {
  return (
    <BudgetItemsProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/expense" element={<ExpensesMobile />} />
              <Route
                path="/expense-desktop"
                element={<ExpensesDesktop />}
              ></Route>
              <Route path="/add-expenses" element={<AddExpensesMobile />} />
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </BudgetItemsProvider>
  );
};
export default App;

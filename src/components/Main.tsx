import { Box } from "@chakra-ui/react";
import { TopNavDesktop } from "./Desktop/TopNavDesktop";
import { Outlet } from "react-router-dom";
import { TopNavMobile } from "./Mobile/TopNavMobile";
import { BottomNavBar } from "./Mobile/BottomNavBar";
import { BudgetItemsProvider } from "../BudgetItemsContext";

export const Main = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      w="100vw"
      h="100vh"
    >
      <Box h="max-content" bg="#CD104D">
        <TopNavMobile />
        <TopNavDesktop />
      </Box>

      <Outlet />

      <BottomNavBar />
    </Box>
  );
};

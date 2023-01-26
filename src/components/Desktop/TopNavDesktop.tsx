import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const TopNavDesktop = () => {
  return (
    <Box color="white" display={["none", "none", "flex"]}>
      <Box
        w="full"
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Menu>
          <MenuButton
            colorScheme="red"
            as={Button}
            bg="none"
            rightIcon={<ChevronDownIcon />}
          >
            Categories
          </MenuButton>
          <MenuList color="black">
            <RouterLink to="/category">
              <MenuItem>Groceries</MenuItem>
            </RouterLink>
            <RouterLink to="/category">
              <MenuItem>Travel</MenuItem>
            </RouterLink>
          </MenuList>
        </Menu>
        <RouterLink to={""}>
          <Button bg="#CD104D" rightIcon={<SmallAddIcon />}>
            Add Expenses
          </Button>
        </RouterLink>
        <RouterLink to="/expense-desktop">Expenses</RouterLink>
      </Box>
    </Box>
  );
};

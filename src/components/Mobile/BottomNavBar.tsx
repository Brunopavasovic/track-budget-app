import { Button, Flex } from "@chakra-ui/react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";

export const BottomNavBar = () => {
  return (
    <Flex
      pt={2}
      h="10vh"
      display={["flex", "flex", "none"]}
      borderTop="1px solid"
      borderTopColor="gray.200"
      mt={2}
      color="gray.600"
      justifyContent="space-around"
    >
      <RouterLink to="/expense">
        <Button bg="none" size="lg" flexDirection="column">
          <AiOutlineUnorderedList size={30} />
        </Button>
      </RouterLink>
      <RouterLink to="/add-expenses">
        <Button bg="none" size="lg" flexDirection="column">
          <IoMdAddCircle size={30} />
        </Button>
      </RouterLink>
      <RouterLink to="/stats">
        <Button bg="none" size="lg" flexDirection="column">
          <BiStats size={30} />
        </Button>
      </RouterLink>
    </Flex>
  );
};

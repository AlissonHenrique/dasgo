import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Alisson Henrique</Text>
          <Text color="gray.300" fontSize="small">
           alisson-henri@live.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Elias Gabriel"
        src="https://github.com/AlissonHenrique.png"
      />
    </Flex>
  );
}

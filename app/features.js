import { Heading, Text, Box, Flex } from "@chakra-ui/react";

export default function Features() {
  return (
    <Flex direction="column" minHeight="100vh" bgGradient="linear(to-b, #1D1C28, #1D1C28)">
      <Box as="header" padding="1rem">
        <Flex align="center" justify="space-between">
          <Heading as="h1" fontSize="5xl" bgGradient="linear(to-l, #C9FFBF, #FFAFBD)" bgClip="text">
            SummarEase
          </Heading>
          <Flex align="center">
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Features</Text>
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Download</Text>
            <Text textColor="#FFFFFF" fontSize="20px" fontWeight="600">Contact</Text>
          </Flex>
        </Flex>
      </Box>
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" p="20px">
        <Box maxW="4xl" width="100%" height="100%">
          <Heading as="h2" textAlign="center" fontSize="xl" textColor="#EB4E82" mb="20px">
            Features
          </Heading>
          <Text fontSize="lg" color="#FFFFFF">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla risus a mauris cursus, id mattis odio iaculis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris nec augue nec dui facilisis efficitur.
            Phasellus pulvinar, quam nec aliquam ultricies, mauris lectus egestas arcu, non pellentesque purus neque vitae mauris.
            Aenean sem neque, congue id congue non, convallis nec lectus. Curabitur bibendum orci vel vestibulum ultrices.
          </Text>
          <Text fontSize="lg" color="#FFFFFF" mt="20px">
            Fusce elementum dolor id lacus vulputate consectetur.
            Sed in massa erat. In sem nisi, fringilla id maximus sed, cursus at est.
            Cras vestibulum nunc urna, non condimentum metus viverra vitae. Morbi eleifend nunc sapien, id blandit leo finibus ac.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

import { useState } from "react";
import { Flex, Box, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

export default function Contact() {
  // State variables to store form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or form submission logic here
    // For this example, we will simply log the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Flex direction="column" minHeight="100vh" bgGradient="linear(to-b, #1D1C28, #1D1C28)">
      <Box as="header" padding="1rem">
      <Flex align="center" justify="space-between">
          <Heading as="h1" fontSize="5xl" bgGradient="linear(to-l, #C9FFBF, #FFAFBD)" bgClip="text">
            SummarEase
          </Heading>
          <Flex align="center">
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Home</Text>
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Features</Text>
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Download</Text>
            <Text textColor="#FFFFFF" fontSize="20px" fontWeight="600">Contact</Text>
          </Flex>
        </Flex>
      </Box>
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" p="20px">
        <Box maxW="4xl" width="100%" height="100%">
          <Heading as="h2" textAlign="center" fontSize="xl" textColor="#EB4E82" mb="20px">
            Contact
          </Heading>
          <Text fontSize="lg" color="#FFFFFF">
            {/* ... Your existing text content ... */}
          </Text>
          <Text fontSize="lg" color="#FFFFFF" mt="20px">
            {/* ... Your existing text content ... */}
          </Text>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              mt="20px"
              color="white"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mt="10px"
              color="white"
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              mt="10px"
              color="white"
              height="lg"
            />
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              mt="20px"
              color="white"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

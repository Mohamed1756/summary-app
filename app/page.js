'use client'
import { useState } from "react";
import { Heading, Text, Box, Flex, Button, Textarea } from "@chakra-ui/react";

export default function Home() {
  let [prompt, setPrompt] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [result, setResult] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPromptBtnClicked = () => {
    setIsLoading(true);
    fetch("/api/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })
      .then((res) => res.text())
      .then((text) => {
        setResult(text);
        setIsLoading(false);
      });
  };

  const handleClearBtnClicked = () => {
    setPrompt("");
    setResult("");
  };

  return (
    <Flex direction="column" height="100vh" bgGradient="linear(to-b, #1D1C28, #1D1C28)">
       <Box as="header" padding="1rem">
        <Flex align="center" justify="space-between">
          <Heading as="h1" fontSize="5xl" bgGradient="linear(to-l, #C9FFBF, #FFAFBD)" bgClip="text">
            SummarEase
          </Heading>
          <Flex align="center">
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Features</Text>
            <Text mr="2rem" textColor="#FFFFFF" fontSize="20px" fontWeight="600">Download</Text>
            <Text  textColor="#FFFFFF" fontSize="20px" fontWeight="600">Contact</Text>
          </Flex>
        </Flex>
      </Box>
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" p="20px">
        <Box maxW="4xl" width="100%" height="80%">
          <Heading as="h2" textAlign="center" fontSize="xl" textColor="#EB4E82" mb="20px">
            Simply paste your text, select the summary length, and get the key points in seconds.
          </Heading>
          <Textarea
            value={result !== "" ? result : prompt} // Display the result if available, otherwise display the prompt
            onChange={handlePromptChange}
            placeholder="Insert your prompt here ..."
            mt="30px"
            size="lg"
            height="md"
            overflowY="auto"
            bgColor="#ffffff"
          />
          <Button
            isLoading={isLoading}
            loadingText="Loading..."
            colorScheme="teal"
            size="lg"
            mt="30px"
            onClick={handleSubmitPromptBtnClicked}
          >
            Submit Text
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            mt="30px"
            ml="20px"
            onClick={handleClearBtnClicked}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

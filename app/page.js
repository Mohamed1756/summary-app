'use client'
import { useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Heading, Text, Box, Flex, Button, Textarea } from "@chakra-ui/react";
import Features from "./features";
import Home from "./home";

export default function ScrollDown() {
  // ... Your existing state and functions for the Home section ...

  return (
    <>
      {/* Section 1: Home */}
      <Element name="home">
       <Home />
      </Element>

      {/* Section 2: Features */}
      <Element name="features">
        <Features />
      </Element>

    </>
  );
}

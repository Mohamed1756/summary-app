'use client'
import { useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Heading, Text, Box, Flex, Button, Textarea } from "@chakra-ui/react";
import Features from "./features";
import Home from "./home";
import Download from "./download";
import Contact from "./contact";

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

     {/* Section 3: Download */}
     <Element name="download">
        <Download />
      </Element>
    

     {/* Section 4: Contact */}
     <Element name="contact">
        <Contact />
      </Element>

    </>
  );
}

import React from "react";
import Skills from "./Skills";
import { About } from "./About";

import {
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import TypeWritter from "../Components/TypeWritter";
import Contact from "./Contact";
import Project from "./Project";
import Archi from '../images/image.png'
import Resume from "../Resume/RESUME OF ARCHI_2024.pdf"


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "RESUME OF ARCHI_2024.pdf";


    link.click();
    window.open(
      "https://drive.google.com/file/d/1_u58NoAHn-o7NXM6zRgYrUCc7HHu4XMc/view?usp=sharing" ,

      "_blank"
    );
  };

const HomePage = () => {
  return (
    <div>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        id="home"
        position="relative"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text>
                <Box display={"flex"} gap={2}>
                  <Text color={"pink.400"}> Hey, </Text>{" "}
                  <Text color={"lavender"} id="user-detail-name">
                    I'm Archi
                  </Text>
                </Box>
              </Text>
              <Text color={"pink.400"} as={"span"} fontSize={"4xl"}>
                <TypeWritter />
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"lavender"}
              id="user-detail-intro"
            >
              Industrious, quick starter, passionate programmer with a curious
              mind who enjoys solving problems and working on new projects.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Box id="resume-button-2">
                <Button
                 id="resume-link-2"
                 className="nav-link resume"
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleDownload}
                >
                  Resume
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            className="home-img"
            width={"500px"}
            objectFit={"cover"}
            // h={["250px", "300px", "350px"]}
            src={Archi}
            borderRadius={"5%"}
          />
        </Flex>
      </Stack>
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;

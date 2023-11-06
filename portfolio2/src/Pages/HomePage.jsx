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
import Om from '../images/om.png.jpg'
import Resume from "../Resume/omprakash-kumar-resume.pdf"

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "omprkash-kumar-resume.pdf";
    link.click();
    window.open(
      "https://drive.google.com/file/d/1qn76EIZ2ow8gaFKgo5zBJBf5prkkGj2K/view?usp=sharing",

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
                  <Text color={"blue.400"}> Hey, </Text>{" "}
                  <Text color={"red"} id="user-detail-name">
                    I'm Omprkash
                  </Text>
                </Box>
              </Text>
              <Text color={"blue.400"} as={"span"} fontSize={"4xl"}>
                <TypeWritter />
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"#fff"}
              id="user-detail-intro"
            >
              Self-driven, quick starter, passionate programmer with a curious
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
            objectFit={"cover"}
            h={["250px", "300px", "350px"]}
            src={Om}
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

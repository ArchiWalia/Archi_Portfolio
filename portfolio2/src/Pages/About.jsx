import { Center, Text, Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import MyGithub from "../Components/MyGithub";

export const About = () => {
  return (
    <Box>
      <Box id="about" className="about section">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>About</Text>
        </Center>
        <br />
        <Center>
          <Grid
            position="relative"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
            gap="5px"
          >
            <Box width={{ base: "200px", sm: "350px", md: "430" }} m="5px">
              <Text color="white" textAlign="left" id="user-detail-intro">
                An aspiring web developer, a lifelong learner, skilled in
                front-end and back-end web development and passionate about
                creating responsive and user-friendly websites. Eager to begin
                career as a Software developer.Currently learing Node.js,
                Django and Express.js.
              </Text>
            </Box>
            <Box
              width={{ base: "200px", sm: "350px", md: "430" }}
              m="5px"
              id="user-detail-name"
            >
              <Text color="white" textAlign="left">
                <span fontWeight={500}>CBitss Institute</span> <br />
                Full Stack Web Development
                <br />
                April 2023 - Nov 2023
                 <br />
                 Chandigarh, India <br />
                 <br />

                <h1>Punjab Technical University</h1>
                <h1>B.tech (Computer Science) </h1>
                Aug 2019 - June 2023
                <br />
                Chandigarh, India
              </Text>
            </Box>
            {/* <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-stats-card"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github.com/ArchiWalia" alt="ArchiWalia"
              />
            </Box> */}

            {/* <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-top-langs"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github-readme-stats.vercel.app/api?username=CodeGemmy&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" alt="ArchiWalia"
              />
            </Box> */}

            {/* <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-streak-stats"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github-readme-stats.vercel.app/api/top-langs?username=CodeGemmy&show_icons=true&locale=en&layout=compact&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" alt="ArchiWalia"
              />
            </Box> */}
          </Grid>
        </Center>
        <MyGithub />
      </Box>
    </Box>
  );
};

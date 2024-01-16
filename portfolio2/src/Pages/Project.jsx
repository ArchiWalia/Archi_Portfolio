import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  Flex,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";
// import Doctor from "../images/doctor.png";
//  import Student from "../images/student.png";
// import gadget from "../images/gadget.png";
// import Recipi from "../images/Recipi-fit.png";
// import Portifolio1 from "../images/portifolio1.png";
import Portfolio1 from "../images/worko.png"
// import Portifolio2 from "../images/portifolio2.png";
import Portfolio2 from "../images/Netflix-Clone.png";
import Portifolio3 from "../images/portfolio3.png";
// import Portifolio4 from "../images/Portfolio4.png";
// import Portifolio5 from "../images/portfolio5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
const projectsArray = [
  {
    logo: Portfolio1,
    title: "Worko-Website",
    github: "https://github.com/CodeGemmy/Website-Theme",
    live_Link: "https://65807a2d201fdd6ed7681fe2--magnificent-daffodil-0c79c5.netlify.app/",
    description:
      "Worko: React.js & Tailwind-Powered Task Management Welcome to Worko  where the seamless power of React.js meets the sleek aesthetics of Tailwind CSS. Our task management platform is meticulously crafted for simplicity and efficiency. Effortlessly organize collaborate and conquer tasks with the dynamic synergy of React.js and the stylish functionality of Tailwind CSS. Elevate your productivity with Worko, where innovation meets usability.",

    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      // {
      //   image:
      //     "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
      //   link: "https://chakra-ui.com",
      // },
      // {
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      //   link: "https://redux.js.org",
      // },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },

  {
    logo: Portfolio2,
    title: "Netflix-Clone",
    github: "https://github.com/CodeGemmy/NETFLIX_CLONE",
    live_Link:
      "https://65743f66c999e548ee826b42--melodic-tarsier-f9de92.netlify.app/#",
    description:
      "Welcome to NetFlix, your personal project playground for mastering the arts of HTML, CSS, and JavaScript. Dive into a hands-on coding experience where every line of code is a step towards excellence. While our screens may not project movies, they showcase the craftsmanship of your coding journey—from polished HTML structures to the stylish flair of CSS and the dynamic touch of JavaScript. Explore the art of web development with NetFlix, where each element is a testament to your evolving skills. ",

    techStack: [
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },

  {
    logo: Portifolio3,
    title: "Fashion Bazar",
    github: "https://github.com/CodeGemmy/Shopping",
    live_Link: "https://659ef21eee891d1d2d763c75--silly-manatee-ac5edc.netlify.app/",
    description:
      "An ECommerce website is an online platform where businesses can sell their products or services to customers over the internet. Shoppers can browse a wide range of products.",

    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },

  // {
  //   logo: Portifolio4,
  //   title: "Mintra - clone",
  //   github: "https://github.com/omprakash8788/Mintra_Clone",
  //   live_Link:
  //     "https://65221c531e9f466779828d7e--reliable-cascaron-efd9f4.netlify.app/",
  //   description:
  //     "An ECommerce website is an online platform where businesses can sell their products or services to customers over the internet. Shoppers can browse a wide range of products, add them to their cart, and make secure online payments. Ecommerce websites often feature search and filter options to help users find products easily",

  //   techStack: [
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  //       link: "https://react.dev",
  //     },
  //     {
  //       image:
  //         "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
  //       link: "https://chakra-ui.com",
  //     },
  //     {
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //     },
  //   ],
  // },

  // {
  //   logo: Portifolio5,
  //   title: "Shop - house",
  //   github: "https://github.com/omprakash8788/Shop-House",
  //   live_Link:
  //     "https://6516bdd5c00c637542542e8f--splendid-chaja-c417ff.netlify.app/",
  //   description:
  //     "An ECommerce website is an online platform where businesses can sell their products or services to customers over the internet. Shoppers can browse a wide range of products, add them to their cart, and make secure online payments.",

  //   techStack: [
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  //       link: "https://react.dev",
  //     },
  //     {
  //       image:
  //         "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
  //       link: "https://chakra-ui.com",
  //     },
  //     {
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //     },
  //   ],
  // },

  
];
export default function Projects() {
  return (
    <Box
      py={["0px", "60px", "80px"]}
      id="projects"
      width={"80%"}
      m={"auto"}
      position="relative"
    >
      <Box pb="30px">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>Projects</Text>
        </Center>
      </Box>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={[0, 5, 10]}
        >
          {projectsArray.map(
            ({ logo, title, techStack, description, github, live_Link }) => {
              return (
                <GridItem
                  key={Math.random()}
                  overflow={"hidden"}
                  className="project-card"
                >
                  <Link href={live_Link} target="_blank">
                    <Image src={logo} w="100%" h="auto" objectFit={"cover"} />
                  </Link>
                  <Heading
                    fontSize={["18px", "20px", "22px", "25px"]}
                    className="project-title"
                    display={"inline-block"}
                    color="#B0BEC5"
                    borderBottom={"4px solid #B0BEC5"}
                    letterSpacing={1}
                    paddingTop={[2, 3, 4, 5]}
                  >
                    {title}
                  </Heading>
                  <Text
                    paddingTop={[2, 3, 4, 5]}
                    color="#B0BEC5"
                    className="project-description"
                    fontSize={["14px", "15px", "16px", "17px"]}
                    align="left"
                  >
                    {description}
                  </Text>
                  <Flex gap={2} className="project-tech-stack">
                    {techStack.map(({ image, link }) => {
                      return (
                        <Box
                          key={Math.random()}
                          py={2}
                          width={"40px"}
                          transition="transform 0.4s"
                        >
                          <Link href={link} target="_blank">
                            <Image width={"100%"} src={image} alt="image" />
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                  <Box>
                    <HStack pb={3}>
                      <Link
                        href={github}
                        target="_blank"
                        className="project-github-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          leftIcon={<FontAwesomeIcon icon={faGithub} />}
                        >
                          Github
                        </Button>
                      </Link>
                      <Link
                        href={live_Link}
                        target="_blank"
                        className="project-deployed-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          colorScheme="twitter"
                          leftIcon={<FontAwesomeIcon icon={faLifeRing} />}
                        >
                          Live
                        </Button>
                      </Link>
                    </HStack>
                  </Box>
                </GridItem>
              );
            }
          )}
        </Grid>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}

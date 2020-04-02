import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";

const AboutPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading as="h1" size="2xl">
        About page 2
      </Heading>
      <NextLink href="/" passHref>
        <Link>Home Page</Link>
      </NextLink>
    </Flex>
  );
};

export default AboutPage;

import { useRouter } from "next/router";
import { SimpleGrid, Text, Alert, Flex, Heading } from "@chakra-ui/core";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Yo that's NOT OK!!!");
  }
  const data: {
    id: string;
    name: string;
    email: string;
  } = await res.json();

  return data;
};

const UserData = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  if (error) {
    return <Alert status="error">Loading fail</Alert>;
  }

  if (!data) {
    return <Alert status="info">Loading...</Alert>;
  }

  return (
    <SimpleGrid columns={2} width="2xs" spacingY={4}>
      <Text fontWeight="bold" marginRight={4}>
        UserID
      </Text>
      <Text>{data.id}</Text>

      <Text fontWeight="bold" marginRight={4}>
        Name
      </Text>
      <Text>{data.name}</Text>

      <Text fontWeight="bold" marginRight={4}>
        Email
      </Text>
      <Text>{data.email}</Text>
    </SimpleGrid>
  );
};

const user = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading as="h1">User</Heading>
      <UserData />
    </Flex>
  );
};

export default user;

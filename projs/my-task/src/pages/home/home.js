import { useEffect, useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Home() {
  const [users, setUser] = useState([]);
  const [searchParam] = useSearchParams();

  const search = searchParam.get("search");

  const navigate = useNavigate();

  const fetchinitialCardsData = async () => {
    const res = await fetch("http://localhost:4001/");
    const dataRes = await res.json();
    setUser(dataRes);
  };

  useEffect(() => {
    fetchinitialCardsData();
  }, []);

  const filteredUsers = useMemo(() => {
    if (search) {
      return users.filter(
        (user) =>
          user && user.content && user.content.toLowerCase().includes(search)
      );
    } else {
      return users;
    }
  }, [search, users]);

  return (
    <div className="wrapper">
      {/* templateColumns="repeat(4, 1fr)"  gap={6}*/}
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {filteredUsers.map((item) => {
          return (
            <GridItem key={item.id}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    boxSize="250"
                    src="https://allthehealthythings.com/wp-content/uploads/2023/12/Gluten-Free-Brown-Butter-Banana-Bread-5-scaled.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />

                  <Stack mt="6" spacing="3">
                    <Heading size="xs" color="green.600">
                      {item.title}
                    </Heading>
                    <Text>{item.content}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="blue"
                    onClick={() => navigate(`/item/${item.id}`)}
                  >
                    Recipe Details
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}

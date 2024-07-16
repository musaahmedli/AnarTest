import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  CardFooter,
  Grid,
} from "@chakra-ui/react";

export function Details() {
  const [users, setUser] = useState([]);

  const fetchRecipe = async () => {
    const res = await fetch("http://localhost:4001/");
    const data = await res.json();
    setUser(data);
    // console.log("object");
  };
  useEffect(() => {
    // console.log(fetchRecipe());
    fetchRecipe();
  }, []);

  return (
    <div className="wrapper">
      {/* templateColumns="repeat(4, 1fr)"  gap={6}*/}
      {/* {fetchRecipe.map((item) => {
        // console.log(item);
        return ( */}
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  boxSize="400"
                  src="https://allthehealthythings.com/wp-content/uploads/2023/12/Gluten-Free-Brown-Butter-Banana-Bread-5-scaled.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />

                <Heading size="xs" color="green.600">
                  <Text>title</Text>
                </Heading>
                <Text>content</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue">Back</Button>
                {/* <Text></Text> */}
              </CardFooter>
            </Card>
          </Grid>
        {/* );
      })} */}
    </div>
  );
}

import React from "react";
import { Box, Card, Center, Container, Flex, Select } from "@mantine/core";
import Login from '@/components/Login/Login.jsx';

function Home() {
  return (
    <Container
      w={"100vw"}
      h={"100vh"}
      fluid
      style={{
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(90deg, #003566 0%, #001D3D 100%)",
      }}
    >
      <Box
        w={"200%"}
        style={{
          position: "absolute",
          opacity: 0.5,
          bottom: "-15%",
          left: "-110%",
        }}
      >

      </Box>
      <Flex
        w={"100%"}
        justify={"center"}
        p={"2rem"}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
      </Flex>
      <Center w={"100%"} h={"100%"}>
        <Card bg={"#c0c0c0"} maw={"330px"} w={"100%"} p={"2rem"}>
          <Flex direction={"column"} gap={"1rem"}>
            {/* LOGIN */}
            <Login />
          </Flex>
        </Card>
      </Center>
      <Flex
        w={"100%"}
        p={"2rem"}
        justify={"center"}
        style={{ position: "absolute", bottom: "0", left: 0 }}
      ></Flex>
    </Container>
  );
}

export default Home;

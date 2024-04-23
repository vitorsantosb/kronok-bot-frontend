import React from "react";
import {Button, Card, Center, Container, Text} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {userRoutes} from '@/models/routes.js';

function NoPage() {
  const navigate = useNavigate();

  return (
    <Container bg={"#000000"} fluid p={50} m={0} w={"100vw"} h={"100vh"}>
      <Center w={"100%"} h={"100%"}>
        <Card withBorder w={"30%"} h={"30%"} p={"5rem"}>
          <Card.Section>
            <Text align={"center"} justify={"center"}>
              Página não encontrada
            </Text>
          </Card.Section>
          <Card.Section align={"center"} >
            <Button onClick={() => navigate(userRoutes.DASHBOARD)}>
              Voltar para Home
            </Button>
          </Card.Section>
        </Card>
      </Center>
    </Container>
  )
}

export default NoPage
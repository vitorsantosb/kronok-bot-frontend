import {Flex, PasswordInput, TextInput, Text, Button, Container, Title} from '@mantine/core';
import React from 'react';
import {useFormik} from 'formik';
import loginValidationSchema from '@/components/Login/schemas/login_form.schema.js';
import {ValidateLoginUser} from '@/services/routes/user/post.js';

function Login() {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      const response = await ValidateLoginUser(values);
      if (response.status === 200) {
        console.log(response);
      }
    },
  })

  return (
    <Flex direction={"column"} gap={"1rem"}>
      <Title order={1} align={"center"}>
        Kronok RPG
      </Title>
      <TextInput
        name="email"
        variant="filled"
        label="Email"
        style={{background: "#C0C0C0"}}
        placeholder="Email"
        value={loginForm.values.email}
        onChange={(e) => {
          loginForm.handleChange(e)
          loginForm.validateField("email")
        }}
        onBlur={() => {
          loginForm.validateField("email")
          loginForm.setFieldTouched("email")
        }}
        error={loginForm.touched.email && loginForm.errors.email}
      />
      <PasswordInput
        name="password"
        variant="filled"
        label="Password"
        placeholder="Password"
        value={loginForm.values.password}
        onChange={(e) => {
          loginForm.handleChange(e)
          loginForm.validateField("password")
        }}
        onBlur={() => {
          loginForm.validateField("password")
          loginForm.setFieldTouched("password")
        }}
        error={loginForm.touched.password && loginForm.errors.password}
      >
      </PasswordInput>
      <Button bg={"#0057FF"} onClick={loginForm.handleSubmit}>
        Entrar
      </Button>
    </Flex>
  );
}

export default Login;
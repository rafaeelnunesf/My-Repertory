import { Link, Typography } from "@mui/material";
import { useState } from "react";
import Container from "../../components/Container";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Form from "../../components/Form";
export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData?.email || !formData?.password || !formData?.passwordConfirm) {
      console.log({ type: "error", text: "Todos os campos são obrigatórios!" });
      return;
    }

    const { email, password, passwordConfirm } = formData;
    if (password !== passwordConfirm) {
      console.log({ type: "error", text: "As senhas devem ser iguais!" });
      return;
    }

    try {
      await api.signUp({ email, password });
      console.log({ type: "success", text: "Cadastro efetuado com sucesso!" });
      navigate("/sign-in");
    } catch (error) {
      if (error.response) {
        console.log({
          type: "error",
          text: error.response.data,
        });
        return;
      }
      console.log({
        type: "error",
        text: "Erro, tente novamente em alguns segundos!",
      });
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <InputText
          id="name"
          type="text"
          value={formData.name}
          placeholder="Your name"
          changeHandler={handleChange}
          label="Name"
        />
        <InputText
          id="email"
          type="email"
          value={formData.email}
          changeHandler={handleChange}
          placeholder="yourname@email.com"
          label="Email"
        />
        <InputPassword
          id="password"
          label="Password"
          value={formData.password}
          placeholder="type your password"
          changeHandler={handleChange}
        />
        <InputPassword
          id="passwordConfirm"
          label="Confirm Password"
          value={formData.passwordConfirm}
          placeholder="confirm your password"
          changeHandler={handleChange}
        />
        <Link component={RouterLink} to="/sign-in">
          <Typography>I'm already registered!</Typography>
        </Link>
        <SubmitButton>Sign-Up</SubmitButton>
      </Form>
    </Container>
  );
}

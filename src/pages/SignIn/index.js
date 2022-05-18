import { Link, Typography } from "@mui/material";
import { useState } from "react";
import Container from "../../components/Container";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Form from "../../components/Form";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData?.email || !formData?.password) {
      console.log({ type: "error", text: "Todos os campos são obrigatórios!" });
      return;
    }

    const { email, password } = formData;

    try {
      const {
        data: { token },
      } = await api.signIn({ email, password });
      console.log(token);
      signIn(token);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        return;
      }
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
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
        <Link component={RouterLink} to="/sign-up">
          <Typography>I'm not registered yet!</Typography>
        </Link>
        <SubmitButton>Sign-In</SubmitButton>
      </Form>
    </Container>
  );
}

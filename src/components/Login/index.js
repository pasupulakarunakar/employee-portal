import { useEffect, useState } from "react";
import {
  Button,
  Container,
  LoginForm,
  LoginFormBody,
  LoginFormInput,
  LoginFormTitle,
  Prompt,
} from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({});

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userName && password)
      fetch("http://localhost:3000/user")
        .then((res) => res.json())
        .then((json) => {
          if (json.username === userName && json.password === password) {
            dispatch(login());
            setMsg({ success: "Login succesful" });
            document.cookie = `username=${userName}`;
            document.cookie = `password=${password}`;
            window.location.href = "/"
          } else {
            setMsg({ error: "Invalid Credentials!" });
          }
        });
  };

  return (
    <Container>
      <LoginForm>
        <LoginFormTitle>Sign In</LoginFormTitle>
        <LoginFormBody>
          <LoginFormInput
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            required
          />
          <LoginFormInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />

          {msg.success ? <Prompt success>{msg.success}</Prompt> : ""}
          {msg.error ? <Prompt background="#e00">{msg.error}</Prompt> : ""}

          <Button onClick={handleLogin} background="blue" color="white">
            Authorize Me!
          </Button>
        </LoginFormBody>
      </LoginForm>
    </Container>
  );
}

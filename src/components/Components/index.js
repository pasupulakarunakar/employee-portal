import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 40%;
`;

const LoginFormTitle = styled.h1`
  background-color: blue;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 24px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormBody = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 50vh;
`;

const LoginFormInput = styled.input`
  width: 70%;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 2vh;
  background-color: #eaeaea;
  color: #000;
`;

const Button = styled.button`
  width: 70%;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 2vh;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin-top: 4vh;
  font-weight: 900;
`;

const Prompt = styled.div`
  background: ${(props) => (props.success ? "#0a0" : props.background)};
  display: flex;
  align-items: center;
  color: #fff;
  width: 62%;
  padding: 2% 2%;
`;

export {
  Container,
  LoginForm,
  LoginFormTitle,
  LoginFormBody,
  LoginFormInput,
  Button,
  Prompt,
};

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? props.height : "100vh")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100vw;
  padding: 10px 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  background: ${(props) => props.background};
  color: #fff;
  width: 100%;
  margin-bottom: auto;
  padding-left: 2vw;
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

const EmpCard = styled.div`
  width: 22%;
  height: 40vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5vw;
  margin: 1% 1%;
  flex-direction: column;
`;

const Profile = styled.img`
  height: ${(props) => (props.height ? props.height : "80px")};
  width: ${(props) => (props.width ? props.width : "80px")};
  border-radius: 50%;
  background: #a00fff;
  padding: 4px 4px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

const EmpName = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-top: 3%;
`;

const EmpMail = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #8c8c8c;
`;

const EmpGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
`;

const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin-left: ${props => props.marginLeft};
`;

const Label = styled.div`
  width: 30%;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;

const Value = styled.div`
  width: 60%;
  margin-left: 10%;
`;

export {
  Container,
  LoginForm,
  LoginFormTitle,
  LoginFormBody,
  LoginFormInput,
  Button,
  Prompt,
  Header,
  Grid,
  EmpCard,
  Profile,
  EmpName,
  EmpMail,
  EmpGrid,
  CardButton,
  Label,
  Field,
  Value,
};

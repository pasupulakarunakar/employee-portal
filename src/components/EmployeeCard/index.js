import React from "react";
import {
  EmpCard,
  Profile,
  EmpName,
  EmpMail,
  EmpGrid,
  CardButton,
} from "../Components";
import Male from "../../assets/person-male.png";
import Female from "../../assets/person-female.png";
import { useNavigate } from "react-router-dom";


export default function EmployeeCard(props) {

    const history = useNavigate()

  return (
    <React.Fragment>
      <EmpCard>
        <Profile src={props.gender === "M" ? Male : Female} />
        <EmpName>{props.name.toUpperCase()}</EmpName>
        <EmpMail>{props.mail}</EmpMail>

        <EmpGrid marginTop="5%" height="20%" width="90%">
          <EmpGrid
            borderRadius="6px"
            background="#def8fa"
            direction="column"
            height="100%"
            width="46%"
          >
            <h5 style={{ marginTop: "4%" }}>Role</h5>
            <p
              style={{
                fontSize: 12,
                marginTop: "2%",
                marginBottom: "3%",
                fontWeight: "500"
              }}
            >
              {props.designation}
            </p>
          </EmpGrid>
          <EmpGrid
            background="#75f0fa"
            borderRadius="6px"
            direction="column"
            height="100%"
            width="44%"
          >
            <CardButton onClick={() => window.location.href=("/employee/"+props.id)} width="100%" height="100%">
              View
            </CardButton>
          </EmpGrid>
        </EmpGrid>
      </EmpCard>
    </React.Fragment>
  );
}

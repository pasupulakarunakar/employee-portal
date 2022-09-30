import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Field,
  Label,
  Profile,
  Value,
} from "../Components";
import Male from "../../assets/person-male.png";
import Female from "../../assets/person-female.png";

export default function EmployeeDetails() {
  const empId = useParams().id;
  const [emp, setEmp] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((json) => setEmp(json.find((item) => parseInt(empId) === item.id)));
  }, [emp, empId]);

  return (
    <Container>
      <Profile
        marginBottom="5vh"
        height="150px"
        width="150px"
        src={emp?.gender === "M" ? Male : Female}
      />

      <Field marginLeft="6%">
        <Label>Name</Label>
        <Value>{emp?.name}</Value>
      </Field>

      <Field marginLeft="6%">
        <Label>Mail</Label>
        <Value>{emp?.mail}</Value>
      </Field>
      <Field marginLeft="6%">
        <Label>Emp id </Label>
        <Value>000{emp?.id}</Value>
      </Field>
      <Field marginLeft="6%">
        <Label>Age</Label>
        <Value>{emp?.age}</Value>
      </Field>
      <Field marginLeft="6%">
        <Label>Role</Label>
        <Value>{emp?.designation}</Value>
      </Field>
    </Container>
  );
}

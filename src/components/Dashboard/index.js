import { useEffect, useState } from "react";
import { Container, Grid } from "../Components";
import EmployeeCard from "../EmployeeCard";
import Head from "../Head";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((json) => {
        setEmployees(json);
      });
  }, []);

  return (
    <Container>
      <Head />
      <Grid>
        {employees &&
          employees.map((e) => {
            return (
              <EmployeeCard
                key={e.id}
                id={e.id}
                name={e.name}
                mail={e.mail}
                gender={e.gender}
                designation={e.designation}
              />
            );
          })}
      </Grid>
    </Container>
  );
}

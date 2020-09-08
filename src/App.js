import React from "react";

import "./App.css";
import TableData from "./components/TableData";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <TableData />
        </Row>
      </Container>
    </div>
  );
}

export default App;

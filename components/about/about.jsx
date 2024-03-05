import React from "react";
import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col>Quem Somos</Col>
          <Col>Termos e Condições</Col>
          <Col>Política de Privacidade</Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col xs={12}>© 2024. Todos direitos reservados a empresa ReactTest Ltda. Este material não pode ser publicado, transmitido por broadcast, reescrito ou redistribuído sem autorização.</Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
  
  export default About
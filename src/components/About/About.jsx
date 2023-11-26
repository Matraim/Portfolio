import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/webdev.svg';
import Toolstack from './Toolstack';
import styled from 'styled-components';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              About<strong className="purple"> Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skills</strong>
          <StyleTextP>
            Полностью увидеть, какие навыки я имею и выполнять для разработки
            проектов для вас
          </StyleTextP>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple"> My </strong>
          Services
          <StyleTextP>Я предлагаю</StyleTextP>
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;

const StyleTextP = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
`;

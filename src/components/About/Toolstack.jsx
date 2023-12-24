import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiCodereview,
  SiGoogleoptimize,
  SiXcode,
  SiReadme,
} from 'react-icons/si';
import { RiCodeBoxFill } from 'react-icons/ri';

import styled from 'styled-components';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleoptimize />
        <StylePText>
          Оптимизация производительности веб-приложений и сайтов
        </StylePText>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <StylePText2>
          Техническая поддержка и сопровождение проектов
        </StylePText2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReadme />
        <StylePText3>Тестирование и отладка кода</StylePText3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiCodeBoxFill />
        <StylePText2>
          Создание пользовательских интерфейсов (UI) и компонентов для
          веб-приложений
        </StylePText2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodereview />
        <StylePText3>
          Разработка веб-сайтов и веб-приложений с использованием React
        </StylePText3>
      </Col>
    </Row>
  );
}

export default Toolstack;

const StylePText = styled.p`
  font-size: 1rem;
  padding: 10px;
`;

const StylePText2 = styled.p`
  font-size: 1rem;
  padding: 10px;
`;
const StylePText3 = styled.p`
  font-size: 1rem;
  padding: 10px;
`;

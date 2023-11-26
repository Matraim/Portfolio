import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            За годы работы я накопил множество навыков которые позволяют мне
            разрабатывать качественный код управлять состоянием приложения и
            создавать адаптивные<span className="purple"> интерфейсы</span>
            <br />
            Мои навыки включают разработку веб-приложений использованиеREST API
            для обмена данными работу с системой контроля версий Git, создание
            компонентов с использованием библиотеки ReactJs, а также работу с
            различными фреймворками и библиотеками такими как Redux, Mobx, и TRK
            Query, . Я также опытен в создании адаптивных интерфейсов с помощью
            Tailwind CSS, и <span className="purple"> Styled Components.</span>
            <br />
            Кроме того я знаком с инструментами которые помогают в создании
            приложений такими как Docker, Firebase и Axios, что позволяет мне
            разрабатывать более масштабируемые и быстрые приложения.
            <br />
            <br />В целом я считаю себя опытным Frontend, разработчиком который
            всегда готов принять новые вызовы и научиться новым навыкам чтобы
            создавать качественные и инновационные{' '}
            <span className="purple"> веб-приложения.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import orderfood from '../../Assets/Projects/pro1.webp';
import weather from '../../Assets/Projects/pro2.png';
import expenses from '../../Assets/Projects/pro3.png';
import bookLibrary from '../../Assets/Projects/isometric-template-website-banner-advertising-resource-online-books-with-female-reading-app-mobile-phone-isolated-white_241107-411.avif';
import wordGame from '../../Assets/pro4.png';
import quizApp from '../../Assets/Projects/pro6.jpeg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: 'white' }}> Последних работ.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Главная страница: Информация о текущей температуре, влажности, скорости ветра и других основных параметрах.
              Геолокация: Определение местоположения пользователя для автоматического отображения погоды в его регионе."
              ghLink="https://github.com/Matraim/Weather-App"
              demoLink="https://matraim.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordGame}
              isBlog={false}
              title="Word-Game Ln Kyrgyz"
              description="Создание слов: Система предлагает случайные буквы, из которых пользователь должен составить слова.  Постепенное усложнение задач по мере продвижения."
              ghLink="https://github.com/Matraim/WordGameKyrgyz"
              demoLink="https://matraim.github.io/WordGameKyrgyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenses}
              isBlog={false}
              title="Expenses - Tracker"
              description="Ввод данных:
              Типы расходов: Возможность добавления различных категорий расходов (питание, транспорт, развлечения и т.д.).
              Сумма и дата: Ввод суммы расхода и выбор даты для точного учета транзакции."
              ghLink="https://github.com/Matraim/Expense_tracker"
              demoLink="https://github.com/Matraim/Expense_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderfood}
              isBlog={false}
              title="Online Order Food"
              description="Добавление блюд в корзину с возможностью изменения количества.
              Общая стоимость заказа и сумма с учетом налогов и доставки. Различные методы оплаты, такие как кредитные карты, электронные кошельки, онлайн-платежи."
              ghLink="https://github.com/Matraim/Order-Food"
              demoLink="https://matraim.github.io/Order-Food/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App React js"
              description="Возможность добавления различных типов вопросов (одиночный выбор, множественный выбор, верно/неверно и т.д.).
              Добавление изображений, видео и аудио к вопросам."
              ghLink="https://github.com/Matraim/quiz-app-sport"
              demoLink="matraim.github.io/quiz-app-sport/" //this project is not deploy
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookLibrary}
              isBlog={false}
              title="Book-Library-App"
              description="Книжное приложение Библиотека это современное приложение для чтения книг с удобным интерфейсом и широкими возможностями для организации и управления вашей литературной коллекцией."
              ghLink="https://github.com/Matraim/Book-Library-App"
              demoLink="https://matraim.github.io/Book-Library-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

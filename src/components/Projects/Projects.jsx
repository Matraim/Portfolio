import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import orderfood from '../../Assets/pro1.webp';
import weather from '../../Assets/Projects/weatherapp.png';
import expenses from '../../Assets/Projects/everhour-expenses.jpg';
import bookLibrary from '../../Assets/Projects/isometric-template-website-banner-advertising-resource-online-books-with-female-reading-app-mobile-phone-isolated-white_241107-411.avif';
import Innovation from '../../Assets/Projects/innovation.png';
import quizApp from '../../Assets/Projects/pro6.jpeg';
import flowerStoreImg from '../../Assets/Projects/Снимок экрана 2023-12-30 в 23.51.07.png';
import bilingual from '../../Assets/Projects/blingual.png';
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
              imgPath={Innovation}
              isBlog={false}
              title="The contribution"
              description="Contribution activity The contribution activity section includes a detailed timeline of your work, including commits you've made or co-authored created with Typescript"
              ghLink="https://github.com/Matraim/Innovation-Digital"
              demoLink="https://innovation-digital-topaz.vercel.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowerStoreImg}
              isBlog={false}
              title="Online store Bouquet.kg"
              description="Онлайн-магазин Bouquet.kg - ваш цветочный рай! У нас вы найдете самые нежные букеты и стильные композиции для любого случая. Удивите своих близких и создайте атмосферу нежности с нашими эксклюзивными цветочными аранжировками. Закажите прямо сейчас и подарите радость с помощью Bouquet.kg!"
              ghLink="https://github.com/Matraim/Bouquet.kg"
              demoLink="https://bouquet-kg.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bilingual}
              isBlog={false}
              title="Bilingual "
              description="Bilingual is a web service designed for creating and taking tests in two languages."
              ghLink="https://github.com/Nurtimax/bilingual"
              demoLink="https://bilingual-nextjs.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

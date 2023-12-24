import React from 'react';
import { Row } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <StyleContainer>
      <Row>
        <StyleFooterBody>
          <StyleFooterIcons>
            <li className="social-icons">
              <a
                href="https://github.com/Matraim"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/MuhammedIbraghim"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/matraim-nurmatov-760473285/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/matraim.official/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </StyleFooterIcons>
          <StyleTextFooter>
            <StyleFooterTexts> Designed by Mr.Matraim </StyleFooterTexts>
            <StyleFooterTexts> Thank you © {year} Mr.Matraim </StyleFooterTexts>
          </StyleTextFooter>
        </StyleFooterBody>
      </Row>
    </StyleContainer>
  );
}

export default Footer;

const StyleContainer = styled.div`
  background-color: rgb(10, 4, 22);
  bottom: 0 !important;
  padding: 10px 0 8px !important;
`;

const StyleFooterBody = styled.div`
  z-index: 1;
  text-align: center !important;
`;

const StyleFooterIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyleTextFooter = styled.div`
  text-align: center !important;
  margin: 1rem;
`;

const StyleFooterTexts = styled.h3`
  font-size: 1em;
  color: white !important;
`;

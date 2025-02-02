import { Col, Row } from "antd";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const Footer = (): JSX.Element => {
  const { localLanguage } = useContext(LanguageContext);
  return (
    <Row justify="center" className="footer">
      <Col>
        <Row>
          <p>
            {localLanguage ? "Creado por" : "Created by"}{" "}
            <strong className="footer_name">Wilinston Quispe</strong>
          </p>
        </Row>
        <Row justify="center">
          <div>
            <a
              href="https://web.facebook.com/wil.quispe.1614"
              target="_blank"
              rel="noopener"
            >
              <img
                className="footer_social"
                alt="Wilinston Facebook"
                src="/facebook.svg"
              />
            </a>
            <a
              href="https://twitter.com/WilQuispe3"
              target="_blank"
              rel="noopener"
            >
              <img
                className="footer_social"
                alt="Wilinston Twitter"
                src="/twitter.svg"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC2xLpPmnDyAxvHlOTOdt_Ug"
              target="_blank"
              rel="noopener"
            >
              <img
                className="footer_social"
                alt="Wilinston Youtube"
                src="/youtube.svg"
              />
            </a>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;

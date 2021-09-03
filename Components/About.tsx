import { Button, Col, Image, Row } from 'antd'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import NavHead from './atoms/NavHead'

const About = () => {
  const { localLanguage } = useContext(LanguageContext)
  return (
    <Row className="about" justify="center" align="middle" id="about">
      <Col style={{ width: '80%' }}>
        {localLanguage ? (
          <NavHead txtMain="Sobre mi" txt="Quien soy?" />
        ) : (
          <NavHead txtMain="About me" txt="Who am i?" />
        )}
        <Row justify="space-around" align="middle">
          <Col>
            <Image
              style={{ borderRadius: '10px' }}
              src="/two.jpg"
              preview={false}
              width={250}
            />
          </Col>
          <Col>
            {localLanguage ? (
              <>
                <Row>
                  <h1 className="about_content">
                    Soy Wilinston y soy un <span>Desarrollador</span>
                  </h1>
                </Row>
                <Row>
                  <p style={{ width: '400px' }}>
                    Soy un apasionado por la tecnología me gusta estar en
                    continuo aprendizaje porque la tecnología avanza muy rápido,
                    soy un creador de contenido comparto mis conocimientos en la
                    plataforma{' '}
                    <a
                      href="https://www.youtube.com/channel/UC2xLpPmnDyAxvHlOTOdt_Ug"
                      target="_blank"
                    >
                      YouTube
                    </a>{' '}
                    me gusta trabajar con tecnologías modernas para el
                    desarrollo web soy una persona que lucho por mis sueños y
                    metas
                  </p>
                </Row>
                <Row justify="space-around">
                  <Button type="primary" href="/CV.pdf" download="wilcv">
                    Descargar CV
                  </Button>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <h1 className="about_content">
                    I am Wilinston and I am a <span>Developer</span>
                  </h1>
                </Row>
                <Row>
                  <p style={{ width: '400px' }}>
                    I'm passionate about technology I like to be in continuous
                    learning because technology advances very fast, I am a
                    content creator I share my knowledge on the{' '}
                    <a
                      href="https://www.youtube.com/channel/UC2xLpPmnDyAxvHlOTOdt_Ug"
                      target="_blank"
                    >
                      YouTube
                    </a>{' '}
                    platform I like to work with modern technologies for web
                    development I am a person who fights for my dreams and goals
                  </p>
                </Row>
                <Row justify="space-around">
                  <Button type="primary" href="/CV.pdf" download="wilcv">
                    Download CV
                  </Button>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About

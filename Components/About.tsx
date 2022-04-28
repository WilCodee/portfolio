import { Button, Col, Image, Row } from 'antd'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import { updateLocalStorage } from '../Utils/updateLocalStorage'
import NavHead from './atoms/NavHead'

const About = () => {
  const { localLanguage } = useContext(LanguageContext)
  const handleClick = () => {
    updateLocalStorage('downloads')
  }
  return (
    <Row className="about" justify="center" align="middle" id="about">
      <Col style={{ width: '80%' }}>
        {localLanguage ? (
          <NavHead txtMain="Sobre mi" />
        ) : (
          <NavHead txtMain="About me" />
        )}
        <Row justify="space-around" align="middle">
          <Col>
            <Image
              style={{ borderRadius: '10px' }}
              src="/img/two.jpg"
            alt='Wilinston Quispe'
            preview={false}
              width={250}
            />
          </Col>
          <Col>
            {localLanguage ? (
              <>
                <Row>
                  <p
                    style={{
                      width: '400px',
                      marginTop: '.5em',
                      textAlign: 'center',
                    }}
                  >
                    Soy un apasionado por la tecnología, me gusta estar en
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
                    desarrollo web. Me considero una joven perseverante, que
                    lucho día a día por mis sueños y metas.
                  </p>
                </Row>
                <Row justify="center">
                  <Button
                    onClick={handleClick}
                    type="primary"
                    href="/WILINSTON-QUISPE_CV.pdf"
                    download="WILINSTON-QUISPE_CV"
                  >
                    Descargar CV
                  </Button>
                  <Button
                    onClick={handleClick}
                    type="link"
                    href="/WILINSTON-QUISPE_CV.pdf"
                    download="WILINSTON-QUISPE_CV"
                  >
                    <a href="/WILINSTON-QUISPE_CV.pdf" target="_blank">
                    Ver CV
                    </a>
                  </Button>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <p
                    style={{
                      width: '400px',
                      marginTop: '.5em',
                      textAlign: 'center',
                    }}
                  >
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
                <Row justify="center">
                  <Button
                    onClick={handleClick}
                    type="primary"
                    href="/wilinston-quispe-cv_en.pdf"
                    download="wilinston-quispe-cv_en"
                  >
                    Download CV
                  </Button>
                  <Button
                    onClick={handleClick}
                    type="link"
                    href="/wilinston-quispe-cv_en.pdf"
                    download="wilinston-quispe-cv_en"
                  >
                    <a href="/wilinston-quispe-cv_en.pdf" target="_blank">
                    View CV
                    </a>
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

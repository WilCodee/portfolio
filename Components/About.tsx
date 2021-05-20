import { Button, Col, Image, Row } from 'antd'
import NavHead from './atoms/NavHead'

const About = () => {
  return (
    <Row className='about' justify='center' align='middle' id='about'>
      <Col style={{ width: '80%' }}>
        <NavHead txtMain='Sobre Mi' txt='Quien soy?' />
        <Row justify='space-around' align='middle'>
          <Col>
            <Image
              src='/photoProfilewithoutback.png'
              preview={false}
              width={250}
            />
          </Col>
          <Col style={{}}>
            <Row>
              <h1 className='about_content'>
                Soy Wilinston y soy un <a>Desarrollador</a>
              </h1>
            </Row>
            <Row>
              <p style={{ width: '400px' }}>
                Soy un apasionado por la tecnología me gusta estar en continuo
                aprendizaje porque la tecnología avanza muy rápido, soy un
                creador de contenido comparto mis conocimientos en la plataforma{' '}
                <a
                  href='https://www.youtube.com/channel/UC2xLpPmnDyAxvHlOTOdt_Ug'
                  target='_blank'
                >
                  YouTube
                </a>{' '}
                me gusta trabajar con tecnologías modernas para el desarrollo
                web soy una persona que lucho por mis sueños y metas
              </p>
            </Row>
            <Row justify='space-around'>
              <Button type='primary' href='/CV.pdf' download='wilcv'>
                Descargar CV
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About

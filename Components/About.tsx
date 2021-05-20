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
              src='https://lh3.googleusercontent.com/QwW-vzJXpfN8-omZ5k7-AI-7MAnT7wkbB_mdAbmHqoqLkqRONztLfAjpiGzuqpgGVEbT3ZpxoTPdHT725nsuciFgqb1x1L-g6v7SA8tlZ8rqjbKldsTkFj79X3kf0v-Ju265HCZv9zdg-ISYMzubit3ZJdO-bvn1rRnZKKqwxSOnctfwDB-RR-z3kWGN4s19AUyCMR5qL9mIh9yZS0RXUZbInCUTdji4uyoBhc5Q7CkBBBaML_W01TNBjdqlIrL-unqnAHgMQXMRZlKtFJS1ics-3Fdf90mutn1yW38-hP3Tmja-51N4PjZdHT1MIa15Yh8seRwD-S9BbkzvIUoWa1NgtQIWIEn-6fRHeewdmWlGrtbJAGaQz69Xych_w4uT4ZHDFou8oCigVceDMCxR_1b0pSbXKlI__nIWMkkegFbeVtrYi1a2P34baKJWO32WTtm3IRpIqYAkE9nsP_F27yh2eXpivlWXdBSqfyKJD2m7XpNPw1XgJZVxl-vFWmvwji2UwpI4MT3JRhBMHBekhufJ1UYpeYpe4BdV8CshNbeV2kpCj3Mcvbt-adUBKbx8KrkqWh2Nglvy2TT8s9RhgKGpK4IzLQUWlNTglWVDishNTrb8a9tfstyF37RGYuVNro21s9OfbK_TnwoiZ_PIo_Ohn7_2kI-gP7Us-5LABhdRzRSs0gJwAdm3NaYQMcqMYUa9PCkXGdEFhd1uvFuYAh2K=w852-h639-no?authuser=0'
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

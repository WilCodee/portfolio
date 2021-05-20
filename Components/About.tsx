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
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
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

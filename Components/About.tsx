import { Button, Col, Image, Row } from 'antd'
import NavHead from './atoms/NavHead'

const About = () => {
  return (
    <Row className='about' justify='center' align='middle'>
      <Col style={{ width: '100%' }}>
        <NavHead txtMain='Sobre Mi' txt='Quien soy?' />
        <Row justify='space-around' align='middle'>
          <Col style={{}}>
            <Image
              src='/photoProfilewithoutback.png'
              preview={false}
              width={300}
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
            <Row justify='center'>
              <Button type='primary'>Mi CV</Button>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About

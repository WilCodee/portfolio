import { Typography, Card, Col, Row } from 'antd'
import { CSSProperties } from 'react'
import NavHead from './atoms/NavHead'

//la gria del para diferentes pantallas
const grid = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 6,
}

const { Paragraph } = Typography

//estilos para cada card
const styleCard = {
  background: '#282828',
  padding: '1em',
  border: 'none',
  borderRadius: '15px',
  color: '#fff',
}

//estilo para el titulo de card
const styleParagraph: CSSProperties = {
  color: '#2d88ff',
  fontSize: '1.3em',
  fontWeight: 'bold',
}

const Proyects = (): JSX.Element => {
  return (
    <Row justify='center' className='proyects' id='proyects'>
      <Col style={{ width: '80%' }}>
        {/* titulo de cada articulo */}
        <NavHead txtMain='Mis Proyectos' txt='all proyects' />

        <Row justify='center' gutter={[16, 16]}>
          <Col {...grid}>
            <Card
              style={{
                ...styleCard,
              }}
              hoverable
              cover={<img alt='example' src='/e-commerce.png' />}
            >
              <Paragraph style={{ ...styleParagraph }} ellipsis>
                e-commerce venta de Ropa
              </Paragraph>
              <span className='card_href'>Visitar Pagina</span>
            </Card>
          </Col>
          <Col {...grid}>
            <Card
              hoverable
              style={{ ...styleCard }}
              cover={<img alt='example' src='/porfolio.png' />}
            >
              <Paragraph style={{ ...styleParagraph }} ellipsis>
                Mi portafolio
              </Paragraph>
              <span className='card_href'>Visitar Pagina</span>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Proyects

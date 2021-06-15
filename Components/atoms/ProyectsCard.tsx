import { Card, Col, Row, Typography } from 'antd'
import { CSSProperties } from 'react'
import { CartInterface } from '../../Interfaces'
import ShowList from './ShowList'

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

const ProyectsCard = (props: CartInterface): JSX.Element => {
  const { img, title, description, href, dataList } = props

  return (
    <Col {...grid} className='cardAnimate'>
      <Card
        hoverable
        style={{ ...styleCard }}
        cover={<img alt='example' src={img} />}
      >
        <Row justify='center'>
          <Col>
            <Row justify='center'>
              <Paragraph style={{ ...styleParagraph }} ellipsis>
                {title}
              </Paragraph>
            </Row>
            <Row justify='center'>
              {href ? (
                <a href={href} target='_blank' className='card_href'>
                  Visitar Pagina
                </a>
              ) : (
                <Paragraph
                  ellipsis={{ rows: 1, expandable: true, symbol: 'mas' }}
                  style={{ color: '#fff', marginBottom: '0' }}
                >
                  {description}
                </Paragraph>
              )}
            </Row>
          </Col>
        </Row>
        <ShowList data={dataList} />
      </Card>
    </Col>
  )
}

export default ProyectsCard

import { Col, Row } from 'antd'

const Footer = (): JSX.Element => {
  return (
    <Row justify='center' className='footer'>
      <Col>
        <Row>
          <p>
            Creado por <strong className='footer_name'>Wilinston Quispe</strong>{' '}
            | ® 2021 Todos los derechos reservados.
          </p>
        </Row>
        <Row justify='center'>
          <div>
            <a href='https://web.facebook.com/wil.quispe.1614' target='_blank'>
              <img className='footer_social' src='/facebook.svg' />
            </a>
            <a href='https://twitter.com/WilQuispe3' target='_blank'>
              <img className='footer_social' src='/twitter.svg' />
            </a>
            <a
              href='https://www.youtube.com/channel/UC2xLpPmnDyAxvHlOTOdt_Ug'
              target='_blank'
            >
              <img className='footer_social' src='/youtube.svg' />
            </a>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer

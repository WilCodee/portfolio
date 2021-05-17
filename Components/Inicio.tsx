import { Col, Image, Row } from 'antd'

const Inicio = (): JSX.Element => {
  return (
    <>
      <Row justify='space-around' className='main_page' align='middle'>
        <Col>
          <p>
            <a className='before_name'>Hola, mi nombre es</a>
            <h1 className='name'>
              Wilinston
              <a> Quispe</a>
            </h1>
          </p>
        </Col>
        <Col style={{ background: 'black' }}>
          <Image
            className='img_circle'
            width={350}
            preview={false}
            src='/photoProfilewithoutback.png'
          />
        </Col>
      </Row>
    </>
  )
}

export default Inicio

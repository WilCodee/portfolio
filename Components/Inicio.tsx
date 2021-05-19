import { Col, Image, Row } from 'antd'

const Inicio = (): JSX.Element => {
  return (
    <>
      <Row justify='space-around' className='main_page' align='middle'>
        <Col>
          <div>
            <a className='before_name'>Hola, mi nombre es</a>
            <h1 className='name'>
              Wilinston
              <a> Quispe</a>
            </h1>
          </div>
        </Col>
        <Col>
          <Image
            className='img_circle'
            width={250}
            preview={false}
            src='/photoProfilewithoutback.png'
          />
        </Col>
      </Row>
    </>
  )
}

export default Inicio

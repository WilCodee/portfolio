import { Col, Image, Row } from 'antd'

const Inicio = (): JSX.Element => {
  return (
    <>
      <Row justify="space-around" className="main_page" align="middle">
        <Col>
          <div>
            <span className="before_name">Hola, mi nombre es</span>
            <h1 className="name">
              Wilinston
              <span> Quispe</span>
            </h1>
          </div>
        </Col>
        <Col style={{ marginBottom: '80px' }}>
          <Image
            className="img_circle"
            width={250}
            height="250px"
            preview={false}
            src="/one.jpg"
          />
        </Col>
      </Row>
    </>
  )
}

export default Inicio

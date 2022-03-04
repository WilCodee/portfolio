import { Button, Col, Image, Row } from 'antd'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import { updateLocalStorage } from '../Utils/updateLocalStorage'

const Inicio = (): JSX.Element => {
  const { setLocalLanguage, localLanguage } = useContext(LanguageContext)

  const changeLanguage = () => {
    setLocalLanguage(!localLanguage)
    updateLocalStorage('change')
  }

  return (
    <>
      <Row justify="space-around" className="main_page" align="middle">
        <Col>
          {localLanguage ? (
            <div>
              <span className="before_name">Hola, mi nombre es</span>
              <h1 className="name">
                Wilinston
                <span> Quispe</span>
              </h1>
            </div>
          ) : (
            <div>
              <span className="before_name">Hi, my name is</span>
              <h1 className="name">
                Wilinston
                <span> Quispe</span>
              </h1>
            </div>
          )}
        </Col>
        <Col style={{ marginBottom: '80px' }}>
          <Image
            className="img_circle"
            width={250}
            height="250px"
            preview={false}
            alt='Wilinston Quispe'
            src="/img/one.jpg"
          />
          <Row justify="center" style={{ marginTop: '50px' }}>
            <Col>
              <Button type="primary" size="small" onClick={changeLanguage}>
                {`${localLanguage ? 'cambiar idioma' : 'change language'}`}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Inicio

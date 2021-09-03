import { Button, Col, Form, Input, message, Row } from 'antd'
import ContactItem from './atoms/ContactItem'
import NavHead from './atoms/NavHead'
import emailjs from 'emailjs-com'
import { LanguageContext } from '../Context/LanguageContext'
import { useContext } from 'react'

const gridMain = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 6,
}

const gridForm = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
}

const styleForm = {
  borderRadius: '7px',
  backgroundColor: '#606770',
  border: 'none',
  caretColor: '#fff',
  color: '#fff',
}

const Contact = () => {
  const { localLanguage } = useContext(LanguageContext)

  // envio email utilizando el servicio emailjs
  const sendEmail = (e: any): void => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jcuzbli',
        'template_m6xltea',
        e.target as HTMLFormElement,
        'user_0Hjr5WWn82n2t2F8e1uxT',
      )
      .then(
        () => {
          message.success(`Correo enviado`)
          location.reload()
        },
        (error) => {
          message.error('Fallo al enviar' + error)
        },
      )
  }

  return (
    <Row className="contact" justify="center" align="middle" id="contact">
      <Col style={{ width: '80%' }}>
        {localLanguage ? (
          <NavHead txtMain="Contacto" />
        ) : (
          <NavHead txtMain="Contact" />
        )}

        <Row style={{ width: '100%' }} gutter={[16, 16]} justify="space-around">
          <Col {...gridMain}>
            <Row>
              {localLanguage ? (
                <>
                  <h2 className="contact_h2">Contactame</h2>
                  <p>
                    Para contactarte conmigo puedes enviar un correo llenando el
                    formulario o por las redes sociales. Importante solo para
                    trabajos Serios
                  </p>
                </>
              ) : (
                <>
                  <h2 className="contact_h2">Contact me</h2>
                  <p>
                    To contact me you can send an email by filling out the form
                    or through social networks. Important only for Serious jobs
                  </p>
                </>
              )}
            </Row>
            <Row>
              <Col>
                <ContactItem img="man.svg" txt="Wilinston Quispe" />
                <ContactItem img="gmail.svg" txt="newwilcode@gmail.com" />
                <ContactItem img="placeholder.svg" txt="Lima Peru" />
              </Col>
            </Row>
          </Col>
          <Col {...gridMain}>
            {localLanguage ? (
              <h2 className="contact_h2">Enviame un mensaje</h2>
            ) : (
              <h2 className="contact_h2">Send me a mail</h2>
            )}
            <form onSubmit={sendEmail}>
              <Row justify="center">
                <Col {...gridForm}>
                  <Form.Item
                    style={{ marginRight: '.5em' }}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: `${
                          localLanguage ? 'campo requerido!' : 'required field!'
                        }`,
                      },
                    ]}
                  >
                    <Input
                      name="name"
                      placeholder={`${localLanguage ? 'Nombre' : 'Name'}`}
                      style={{ ...styleForm }}
                    />
                  </Form.Item>
                </Col>
                <Col {...gridForm}>
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: `${
                          localLanguage ? 'campo requerido!' : 'required field!'
                        }`,
                      },
                    ]}
                  >
                    <Input
                      name="subject"
                      placeholder={`${localLanguage ? 'Asunto' : 'Subject'}`}
                      style={{ ...styleForm }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: `${
                      localLanguage ? 'campo requerido!' : 'required field!'
                    }`,
                  },
                  {
                    type: 'email',
                    message: `${
                      localLanguage ? 'correo invalida' : 'invalid email!'
                    }`,
                  },
                ]}
              >
                <Input
                  name="email"
                  placeholder={`${localLanguage ? 'Tu correo' : 'Your email'}`}
                  style={{ ...styleForm }}
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: `${
                      localLanguage ? 'campo requerido!' : 'required field!'
                    }`,
                  },
                ]}
              >
                <Input.TextArea
                  name="message"
                  placeholder={`${localLanguage ? 'Mensaje...' : 'Message...'}`}
                  style={{ ...styleForm }}
                />
              </Form.Item>

              <Row justify="center">
                <Button type="primary" htmlType="submit">
                  {localLanguage ? 'Enviar' : 'Send'}
                </Button>
              </Row>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Contact

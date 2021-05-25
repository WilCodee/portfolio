import { Button, Col, Form, Input, message, Row } from 'antd'
import ContactItem from './atoms/ContactItem'
import NavHead from './atoms/NavHead'
import emailjs from 'emailjs-com'

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
  // envio email utilizando el servicio emailjs
  const sendEmail = (e: any): void => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jcuzbli',
        'template_m6xltea',
        e.target as HTMLFormElement,
        'user_0Hjr5WWn82n2t2F8e1uxT'
      )
      .then(
        () => {
          message.success(`Correo enviado`)
          location.reload()
        },
        error => {
          message.error('Fallo al enviar' + error)
        }
      )
  }

  return (
    <Row className='contact' justify='center' align='middle' id='contact'>
      <Col style={{ width: '80%' }}>
        <NavHead txtMain='Contacto' txt='get in touch' />
        <Row style={{ width: '100%' }} gutter={[16, 16]} justify='space-around'>
          <Col {...gridMain}>
            <Row>
              <h2 className='contact_h2'>Contactame</h2>
              <p>
                Para contactarte conmigo puedes enviar un correo llenando el
                formulario o por las redes sociales. Importante solo para
                trabajos Serios
              </p>
            </Row>
            <Row>
              <Col>
                <ContactItem
                  img='man.svg'
                  txt='Wilinston Quispe'
                  txtMain='Nombre'
                />
                <ContactItem
                  img='gmail.svg'
                  txt='newwilcode@gmail.com'
                  txtMain='Correo'
                />
                <ContactItem
                  img='placeholder.svg'
                  txt='Lima Peru'
                  txtMain='Direccion'
                />
              </Col>
            </Row>
          </Col>
          <Col {...gridMain}>
            <h2 className='contact_h2'>Enviame un mensaje</h2>
            <form onSubmit={sendEmail}>
              <Row justify='center'>
                <Col {...gridForm}>
                  <Form.Item
                    style={{ marginRight: '.5em' }}
                    name='name'
                    rules={[{ required: true, message: 'campo requerido!' }]}
                  >
                    <Input
                      name='name'
                      placeholder='Nombre'
                      style={{ ...styleForm }}
                    />
                  </Form.Item>
                </Col>
                <Col {...gridForm}>
                  <Form.Item
                    name='subject'
                    rules={[{ required: true, message: 'campo requerido!' }]}
                  >
                    <Input
                      name='subject'
                      placeholder='Asunto'
                      style={{ ...styleForm }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'campo requerido!',
                  },
                  {
                    type: 'email',
                    message: 'correo invalido',
                  },
                ]}
              >
                <Input
                  name='email'
                  placeholder='Correo'
                  style={{ ...styleForm }}
                />
              </Form.Item>

              <Form.Item
                name='message'
                rules={[{ required: true, message: 'campo requerido!' }]}
              >
                <Input.TextArea
                  name='message'
                  placeholder='Mensaje...'
                  style={{ ...styleForm }}
                />
              </Form.Item>

              <Row justify='center'>
                <Button type='primary' htmlType='submit'>
                  Submit
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

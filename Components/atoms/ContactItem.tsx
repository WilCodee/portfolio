import { Col, Row } from 'antd'
import { FunctionComponent } from 'react'

type ContactItemProps = {
  img: string
  txtMain: string
  txt: string
}

const ContactItem: FunctionComponent<ContactItemProps> = ({
  img,
  txtMain,
  txt,
}): JSX.Element => {
  return (
    <Row>
      <Col>
        <img src={img} className='contact_logo' />
      </Col>
      <Col className='contact_items'>
        <span className='contact_h2'>{txtMain}</span>
        <p>{txt}</p>
      </Col>
    </Row>
  )
}

export default ContactItem

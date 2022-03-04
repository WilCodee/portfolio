import { Col, Row } from 'antd'
import { FunctionComponent } from 'react'

type ContactItemProps = {
  img: string
  txt: string
}

const ContactItem: FunctionComponent<ContactItemProps> = ({
  img,
  txt,
}): JSX.Element => {
  return (
    <Row>
      <Col>
        <img src={img} alt={txt} className="contact_logo" />
      </Col>
      <Col className="contact_items">
        <p>{txt}</p>
      </Col>
    </Row>
  )
}

export default ContactItem

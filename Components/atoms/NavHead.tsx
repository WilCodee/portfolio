import { Row } from 'antd'
import { FunctionComponent } from 'react'

type NavHeadProps = {
  txtMain: string
}

const NavHead: FunctionComponent<NavHeadProps> = ({ txtMain }): JSX.Element => {
  return (
    <Row justify="center" className="about_header">
      <div>
        <h1>{txtMain}</h1>
      </div>
    </Row>
  )
}

export default NavHead

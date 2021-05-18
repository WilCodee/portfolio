import { Row } from 'antd'
import { FunctionComponent } from 'react'

type NavHeadProps = {
  txtMain: string
  txt: string
}

const NavHead: FunctionComponent<NavHeadProps> = ({
  txtMain,
  txt,
}): JSX.Element => {
  return (
    <Row justify='center' className='about_header'>
      <div>
        <h1>{txtMain}</h1>
        <h2 className='line_trought'>
          <span>{txt}</span>
        </h2>
      </div>
    </Row>
  )
}

export default NavHead

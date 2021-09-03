import { Col, Image, Progress, Row } from 'antd'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import NavHead from './atoms/NavHead'

const grid = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
}

const Skills = (): JSX.Element => {
  const { localLanguage } = useContext(LanguageContext)
  return (
    <Row className="about" justify="center" align="middle" id="skills">
      <Col style={{ width: '80%' }}>
        {localLanguage ? (
          <NavHead txtMain="Mis Skills" />
        ) : (
          <NavHead txtMain="My Skills" />
        )}
        <Row
          style={{ width: '100%', margin: '1em 0 0' }}
          justify="space-around"
          align="middle"
        >
          <Col {...grid}>
            {localLanguage ? (
              <>
                <Row justify="center">
                  <h1 className="about_content">
                    Mis conocimientos en base a mi <span>Experiencia</span>
                  </h1>
                </Row>
                <Row justify="center">
                  <p style={{ width: '400px' }}>
                    Soy apasionado con las tecnologías que trabajo, me gusta
                    trabajar con buenas prácticas en el desarrollo he escogido
                    este stack de tecnologías porque sé que son una de las más
                    modernas y más eficientes
                  </p>
                </Row>
              </>
            ) : (
              <>
                <Row justify="center">
                  <h1 className="about_content">
                    My knowledge based on my<span> experience</span>
                  </h1>
                </Row>
                <Row justify="center">
                  <p style={{ width: '400px' }}>
                    I'm passionate about the technologies I work with, I like to
                    work with good development practices. I have chosen this
                    stack of technologies because I know they are one of the
                    most modern and efficient
                  </p>
                </Row>
              </>
            )}
          </Col>
          <Col {...grid}>
            <Row justify="center">
              <Col style={{ width: '50%' }}>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/react.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={75} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/graphql.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={65} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/javascript.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={70} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/ant-design.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={65} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image
                      src="/nextjs-icon.svg"
                      className="nextjs"
                      width={20}
                      preview={false}
                    />
                    <Progress showInfo={false} percent={75} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/typescript.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={73} status="active" />
                  </div>
                </Row>
                <Row style={{ width: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <Image src="/tailwindcss.svg" width={20} preview={false} />
                    <Progress showInfo={false} percent={55} status="active" />
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Skills

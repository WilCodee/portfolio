import { Col, Image, Row } from "antd";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import NavHead from "./atoms/NavHead";

const grid = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
};

const Skills = (): JSX.Element => {
  const { localLanguage } = useContext(LanguageContext);
  return (
    <Row className="about" justify="center" align="middle" id="skills">
      <Col style={{ width: "80%" }}>
        {localLanguage ? (
          <NavHead txtMain="Mis Skills" />
        ) : (
          <NavHead txtMain="My Skills" />
        )}
        <Row
          style={{ width: "100%", margin: "1em 0 0" }}
          justify="space-around"
          align="middle"
        >
          <Col {...grid}>
            {localLanguage ? (
              <>
                <Row justify="center">
                  <p style={{ width: "400px", textAlign: "center" }}>
                    Soy apasionado con las tecnologías que trabajo, me gusta
                    trabajar con buenas prácticas en el desarrollo he escogido
                    este stack de tecnologías porque sé que son una de las más
                    modernas y más eficientes.
                  </p>
                </Row>
              </>
            ) : (
              <>
                <Row justify="center">
                  <p style={{ width: "400px", textAlign: "center" }}>
                    I'm passionate about the technologies I work with, I like to
                    work with good development practices. I have chosen this
                    stack of technologies because I know they are one of the
                    most modern and efficient.
                  </p>
                </Row>
              </>
            )}
          </Col>
          <Col {...grid}>
            <Row justify="center">
              <Col>
                <Row justify="center">
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/react.svg"
                      alt="ReactJS"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/graphql.svg"
                      alt="Graphql"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/javascript.svg"
                      alt="JavaScript"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/ant-design.svg"
                      alt="AntDesign"
                      width={80}
                      preview={false}
                    />
                  </div>
                </Row>

                <Row justify="center">
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/nextjs-icon.svg"
                      alt="NextJS"
                      className="nextjs"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/typescript.svg"
                      alt="Typescript"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/tailwindcss.svg"
                      alt="TailWindCSS"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/csharp.svg"
                      alt="CSharp"
                      width={80}
                      preview={false}
                    />
                  </div>
                </Row>
                <Row justify="center">
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/git.svg"
                      alt="Github"
                      width={80}
                      preview={false}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <Image
                      src="/mongodb.svg"
                      alt="MongoDB"
                      width={80}
                      preview={false}
                    />
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;

import { Col, Row } from 'antd'
import NavHead from './atoms/NavHead'
import ProyectsCard from './atoms/ProyectsCard'

const Proyects = (): JSX.Element => {
  return (
    <Row justify='center' className='proyects' id='proyects'>
      <Col style={{ width: '80%' }}>
        {/* titulo de cada articulo */}
        <NavHead txtMain='Mis Proyectos' txt='all proyects' />

        <Row justify='center' gutter={[16, 16]}>
          <ProyectsCard
            img='/Inicio-Goshop.png'
            title='Ecommerce venta de Ropas'
            href='https://mi-tienda-online.vercel.app/'
            dataList={[
              'JavaScript',
              'React.js',
              'Redux',
              'Antdesign',
              'Css',
              'Bulma',
              'Next.js',
              'Git',
              'Apollo Client',
              'Paypal',
              'Cloudinary',
            ]}
          />
          <ProyectsCard
            img='/porfolio.png'
            title='Mi Portafolio'
            href='https://wilinston-quispe.vercel.app/'
            dataList={[
              'TypeScript',
              'Css',
              'Next.js',
              'React.js',
              'Antdesign',
              'Git',
            ]}
          />
          <ProyectsCard
            img='api-ecommerce.png'
            title='Creacion de API'
            description='creación de una API para una tienda online'
            dataList={[
              'Node.js',
              'MongoDB',
              'Graphql',
              'Cloudinary',
              'Mongoose',
            ]}
          />
          <ProyectsCard
            img='/YT-clone.png'
            title='YT Clone'
            href='https://yt-clone-two.vercel.app/'
            dataList={[
              'TypeScript',
              'Next.js',
              'Css',
              'React.js',
              'Git',
              'API Youtube',
            ]}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default Proyects

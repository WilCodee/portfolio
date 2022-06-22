import { Col, Row } from 'antd'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import NavHead from './atoms/NavHead'
import ProyectsCard from './atoms/ProyectsCard'

const DATA = [
  {
    img: ['/img/Inicio-Goshop.png'],
    title: 'Ecommerce venta de Ropas',
    titleEnglish: 'Ecommerce sale of clothes',
    href: 'https://mi-tienda-online.vercel.app/',
    dataList: [
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
    ],
  },
  {
    img: ['/img/porfolio.png'],
    title: 'Mi Portafolio',
    titleEnglish: 'My Portfolio',
    href: 'https://wilinston-quispe.vercel.app/',
    dataList: ['TypeScript', 'Css', 'Next.js', 'React.js', 'Antdesign', 'Git'],
  },
  {
    img: ['/img/api-ecommerce.png'],
    title: 'Creacion de API',
    titleEnglish: 'API creation',
    description: 'creación de una API para una tienda online',
    descriptionEnglish: 'creating an API for an online store',
    dataList: ['Node.js', 'MongoDB', 'Graphql', 'Cloudinary', 'Mongoose'],
  },
  {
    img: ['/img/YT-clone.png'],
    title: 'YT Clone',
    titleEnglish: 'YT Clone',
    href: 'https://yt-clone-two.vercel.app/',
    dataList: [
      'TypeScript',
      'Next.js',
      'Css',
      'React.js',
      'Git',
      'API Youtube',
    ],
  },
  {
    img: ['/img/Menus.png'],
    title: "Menus Diarios Pa'ti",
    titleEnglish: "Menus Diarios Pa'ti",
    href: 'https://menus-diarios-pati.vercel.app/',
    dataList: [
      'TypeScript',
      'Next.js',
      'Css',
      'React.js',
      'Git',
      'TailwindCSS',
      'Apollo client',
    ],
  },
  {
    img: [
      '/img/screen-1.png',
      '/img/screen-2.png',
      '/img/screen-3.png',
      '/img/screen-4.png',
    ],
    title: 'iMakeUp',
    titleEnglish: 'iMakeUp',
    description:
      'Una app que le permite a las usuarias probarse los productos de maquillaje y recibir asesoría con ayuda de realidad aumentada e inteligencia artificial.',
    descriptionEnglish:
      'An app that allows users to try on makeup products and receive advice with the help of augmented reality and artificial intelligence.',
    dataList: [
      'TypeScript',
      'React Native',
      'React Native Navigation',
      'Git',
      'App Gallery',
    ],
  },
  {
    img: [
      '/img/LIMPIZIMO-1.png',
      '/img/LIMPIZIMO-2.png',
      '/img/LIMPIZIMO-3.png',
      '/img/LIMPIZIMO-4.png',
    ],
    title: 'LIMPIZIMO',
    titleEnglish: 'LIMPIZIMO',
    description:
      'Los usuarios pueden buscar personas que limpien, ordenas su casa lo puede hacer por horas y pueden ver su ubicación usando el mapa dentro del la app.',
    descriptionEnglish:
      'Users can search for people who clean, tidy their house can do it for hours and they can see their location using the map inside the app.',
    dataList: ['React Native', 'React Native Navigation', 'Git'],
  },
]

const Proyects = (): JSX.Element => {
  const { localLanguage } = useContext(LanguageContext)
  return (
    <Row justify="center" className="proyects" id="proyects">
      <Col style={{ width: '80%' }}>
        {/* titulo de cada articulo */}

        {localLanguage ? (
          <NavHead txtMain="Mis Proyectos" />
        ) : (
          <NavHead txtMain="My Proyects" />
        )}

        <Row justify="center" gutter={[16, 16]}>
          {DATA.reverse().map((d,i) => (
            <ProyectsCard
              key={i}
              img={d.img}
              title={d.title}
              titleEnglish={d.titleEnglish}
              href={d.href}
              description={d.description}
              descriptionEnglish={d.descriptionEnglish}
              dataList={d.dataList}
            />
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Proyects

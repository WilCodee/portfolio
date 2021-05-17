import { AppProps } from 'next/app'
import '../styles/index.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
export default MyApp

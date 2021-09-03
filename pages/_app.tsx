import { AppProps } from 'next/app'
import '../styles/index.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import LanguageProvider from '../Context/LanguageContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </Provider>
  )
}
export default MyApp

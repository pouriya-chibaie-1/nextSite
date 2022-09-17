import '../styles/globals.css'

import {ContextProvider} from '../context/context'
import { FormikProvider } from 'formik'
function MyApp({ Component, pageProps }) {
  return <ContextProvider>

  <Component {...pageProps} />
  </ContextProvider>
}

export default MyApp
   
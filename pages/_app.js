import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import All from './../components/all'
import { Provider } from 'react-redux'
import store from '../redux/state'


function MyApp({ Component, pageProps }) {
  return <> 
  <All>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  

  </All>
  
  </>
}

export default MyApp

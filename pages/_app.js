import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
  // return <Component {...pageProps}/>
}

export default MyApp

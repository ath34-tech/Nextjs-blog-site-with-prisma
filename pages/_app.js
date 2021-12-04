import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import AppContext from '../context/appContext'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  const [loginData,SetLoginData]=React.useState({"login":false,"user_name":"","user_id":0})
  const handleLoginData=data=>{
    SetLoginData(data)
  }
  return( 
    <CookiesProvider>
    <AppContext.Provider value={{data:loginData,setData:handleLoginData}}>
    <ChakraProvider>

    <Layout>
  <Component {...pageProps} />
  </Layout>  
  </ChakraProvider> 
  </AppContext.Provider>
  </CookiesProvider>
  )
}



export default MyApp

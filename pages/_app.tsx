import React from "react"
import  Menu  from '../components/Menu'

const MyApp = ({ Component, pageProps }) =>(
    <>
        <header>
            <Menu/>       
        </header>
        <main>
            <Component {...pageProps}/>
        </main>
    </>

);

export default MyApp;
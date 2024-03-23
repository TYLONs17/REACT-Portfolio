// import "./app.css"

import Toggle from "./components/toggle/Toggle"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import ProductList from "./components/productList/ProductList"
import Contact from "./components/contact/Contact"
import BackToUp from '@uiw/react-back-to-top' 
import Footer from "./sections/Footer"
import { ThemeContext } from "./context"
import { useContext } from "react"




export default function App() {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
      <div style={{
        backgroundColor: darkMode? "slategray" : "blueviolet", 
        color: darkMode && "white",
      }} >
      <Toggle />
      <Intro themeBackground={darkMode ? "slategray" : "blueviolet"} />
      <About themeBackground={darkMode ? "slategray" : "blueviolet"} />
      <ProductList themeBackground={darkMode ? "slategray" : "blueviolet"} />
      <Contact themeTextColor={darkMode ? "white" : "black"} themeBackground={darkMode ? "slategray" : "blueviolet"} />
      <BackToUp>TOP</BackToUp> 
      <Footer />
    </div>
  )
}
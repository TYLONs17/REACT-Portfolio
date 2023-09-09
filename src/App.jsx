import Toggle from "./components/toggle/Toggle"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import ProductList from "./components/productList/ProductList"
import Contact from "./components/contact/Contact"
import { ThemeContext } from "./context"



export default function App() {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
  return (
    // style={{backgroundColor: darkMode? "#222" : "white", color: "white"}}
    <div >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}
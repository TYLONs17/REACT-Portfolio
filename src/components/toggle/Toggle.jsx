import "./toggle.css"
import Sun from "../../assets/images/sun.svg"
import Moon from "../../assets/images/moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export default function Toggle() {
     const theme = useContext(ThemeContext)
     
     const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
     }
    return(
        <div className="toggle">
            <img src={Sun} alt="sun" className="toggle-icon"/>
            <img src={Moon} alt="moon" className="toggle-icon"/>
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? -7 : 37}}></div>
        </div>
    )
}
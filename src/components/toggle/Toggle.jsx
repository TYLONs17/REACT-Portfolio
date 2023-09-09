import { ThemeContext } from "../../context"
import "./toggle.css"

export default function Toggle() {
     const theme = useContext(ThemeContext)
     
     const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
     }
    return(
        <div className="toggle">
            <img src="" alt="sun" className="toggle-icon"/>
            <img src="" alt="moon" className="toggle-icon"/>
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}
import "./intro.css"
import Me from "../../assets/images/Me.png"
import MouseSVG from "./MouseSVG.jsx"
import Lottie from "lottie-react"
import animationData from "../../assets/icons/Animation - 1701548833834.json"
import { useRef } from "react"

export default function Intro ({themeBackground})  {
    const lottieAnima = useRef()

    return (
        <div className="intro" style={{backgroundColor: themeBackground}}>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h3 className="intro-head">Hi There!<span className="wave">👋🏾</span>, The Name's -  </h3>
                    <h1 className="intro-name">TYLONs17&trade;</h1>
                    <p className="intro-desc">Welcome to my website, where technology meets creativity </p>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-item-title">Web Developer</div>
                            <div className="intro-item-title">UI/UX Designer</div>
                            <div className="intro-item-title">Photographer</div>
                            <div className="intro-item-title">Writer (songs/Poems)</div>
                            <div className="intro-item-title">Content Creator</div>
                            <div className="intro-item-title">Fitness/Martial Arts Enthusiast</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        – 
                        explore the digital realm through the lens of a Computer-Networking Student/Web-dev enthusiast mastering C#, Python, Java, and web technologies like HTML, CSS, and JavaScript, with a keen interest in React.js and the now popular Next.js Framework. 
                    </p>

                    <p>"Live for a Perfect End!"</p>
                </div>

                {/* <MouseSVG className="intro-scroll"/> */}

                <Lottie  lottieRef={lottieAnima} loop={true} animationData={animationData} />
                
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Me} alt="Image of me" className="intro-img"/>
            </div>
        </div>
    )
}


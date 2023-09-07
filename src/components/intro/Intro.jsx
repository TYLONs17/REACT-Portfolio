import "./intro.css"
import Me from "../../assets/images/Me.png"
import Mouse from "../../assets/icons/DooFi-Mouse.svg"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h3 className="intro-head">Hi There! 👋, The Name's - </h3>
                    <h1 className="intro-name">TYLONs17&trade;</h1>
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
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                </div>
                <svg className="intro-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >{Mouse}</svg>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src="" alt="Image of me" className="intro-img"/>
            </div>
        </div>
    )
}

export default Intro
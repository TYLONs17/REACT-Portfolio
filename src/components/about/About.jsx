import "./about.css"
import about from "../../assets/images/about.jpg" 
// import award from "../../assets/images/award.jpg" 

import { useEffect, useState } from "react"

export default function About({themeBackground}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    console.log(windowWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section id="about">
            {/* <h1>{windowWidth > 768 ? 'Desktop View' : 'Mobile View'}</h1> */}
            <div className="about">
                <div className="about-left" style={{backgroundColor: themeBackground}}>
                    <div className="about-card bg"></div>
                    <div className="about-card">
                        <img 
                        src={about}
                        alt="picture of me"
                        className="about-img"
                        />
                    </div>
                </div>
            
                <div className="about-right">
                    <div className="about-right-bg"></div>
                    <h1 className="about-title">About me</h1>
                    <p className="about-sub">
                        A world of distorted innovation. 
                    </p>
                    <p className="about-desc">
                        I am passionate about coding, problem-solving, and bringing ideas to life. <br/> 
                        On a mission to find and buid &quot;that&quot; something amazing!
                    </p>
                </div>
                
            </div>
            

            <div className="about2" id="about2">
                
                <div className="about-award about-right ">
                    <div className="about2-left-bg"></div>
                    <div className="about-award-texts">
                        <h4 className="about-title">My Objective?</h4>
                        <p className="about2-desc">
                            To further my knowledge on software and web application development techniques and processes, <br/>
                            I want to be able to contribute and work on meaningful and purposeful projects-- 
                            <br/> <br/>
                            wheather as a Solo Dev, as part of a mini Team or within a large organisation. <br/>
                            I am eager to Co-Op with like-minded individuals with similar aspirations,
                            i want an environment where I can continually learn and make a significant impact.
                        </p>

                        <br/> <br/>

                        <h4 className="about-title">Currently working on / Learning</h4>
                        
                        <ul className="about2-desc">
                            <li>Next.js Web Framework</li>
                            <li>C# and the .Net.ASP MVC web Framework</li>
                            <li>PenTesting (Web Security)</li>
                        </ul>

                        <div style={{position: "relative"}}>
                            <p style={{color: "cyan", position: "absolute", bottom: -20, right: 0}}>
                                &quot;Foul Tarnished, <br/> 
                                slumber not for the <span>The world awaits your return&quot;</span>
                            </p>
                        </div>
                        
                    </div>
                    
                    
                </div>

                <div className="about-left" style={{backgroundColor: themeBackground}}>
                    <div className="about-card bg"></div>
                    <div className="about-card">
                        <img 
                            src={about}
                            alt="picture of me"
                            className="about-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
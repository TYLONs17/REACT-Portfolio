import "./about.css"
import about from "../../assets/images/about.jpg" 
import award from "../../assets/images/award.jpg" 

export default function About({themeBackground}) {
    return (
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
                {/* <div className="about-right-bg"></div> */}
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    A world of distorted innovation. 
                </p>
                <p className="about-desc">
                    I am passionate about coding, problem-solving, and bringing ideas to life. <br/> 
                    On a mission to find and buid "that" something amazing!
                </p>
                <div className="about-award">
                    <img src={award} alt="an award" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">My Objective?</h4>
                        <p className="about-award-desc">
                            To further my knowledge on software and web application development techniques and processes, <br/>
                            be able to contribute and work on meaningful and purposeful projects-- 
                            <br/> <br/>
                            wheather as a Solo Dev, as part of a mini Team or within a large organisation. <br/>
                            I am eager to Co-Op with like-minded individuals with similar aspirations, <br/>
                            i want an environment where I can continually learn and make a significant impact.
                        </p>

                        <br/> <br/>

                        <h4 className="about-award-title">Currently working on / Learning</h4>
                        
                        <ul className="about-award-desc">
                            <li>Next.js Web Framework</li>
                            <li>C# and the .Net.ASP MVC web Framework</li>
                        </ul>

                        <div>
                        <p style={{color: "cyan", position: "absolute", bottom: -70, right: 70}}>
                            "Foul Tarnished, <br/> 
                            slumber not for the <span>The world awaits your return"</span>
                        </p>
                    </div>
                        
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}
import "./about.css"

export default function About() {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img 
                    src="" 
                    alt=""
                    className="about-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    It is a long established fact that a reader will be distracted  by the readable content
                </p>
                <p className="about-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi porro neque facilis cumque, velit dolore ipsam perspiciatis error similique? Dolores quibusdam exercitationem sunt, ut quaerat possimus itaque quod autem temporibus!
                </p>
                <div className="about-award">
                    <img src="" alt="" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Design</h4>
                        <p className="about-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo maiores repellendus omnis similique illum minus a, dolorum sequi quos?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
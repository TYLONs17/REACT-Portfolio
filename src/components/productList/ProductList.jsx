import ProjectSlider from "./ProjectSlider"
import "./productList.css"
// import Product from "../product/Product"
import { ProjectSliderData  } from "../../data"


// import ReactCardSlider from 'react-card-slider-component'

export default function ProductList(themeBackground) {

    function sliderClick (e) {
        console.log(e)
    }

    const data = ProjectSliderData(sliderClick)



    return (
        <div className="productList" style={{backgroundColor: themeBackground}}>
            <div className="productList-texts">
                <div className="productList-title">Create & Inspire. JALESnotJAQUE</div>
                <div className="productList-desc">
                    <h3>Explore My Work</h3>
                    <p>Check out some of the projects I&apos;ve worked on. Each one a unique foretelling of my journey, skills & passion.</p>
                </div>
            </div>

            {/* <div className="productList-list">
                {Array.isArray(projects) && projects.map((item) => 
                    <Product key={item.id} img={item.img} link={item.link} />
                )}
            </div> */}

            <ProjectSlider items={data} />
            

        </div>
       
    )
}
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

export default function ProductList(themeBackground) {
    return (
        <div className="productList" style={{backgroundColor: themeBackground}}>
            <div className="productList-texts">
                <div className="productList-title">Create & Inspire. JALESnotJAQUE</div>
                <p className="productList-desc">
                    <h3>Explore My Work</h3>
                    <p>Check out some of the projects I've worked on. Each one a unique foretelling of my journey, skills & passion.</p>
                </p>
            </div>
            <div className="productList-list">
                {products.map((item) => 
                    <Product 
                        key={item.id}
                        img={item.img}
                        link={item.link} 
                    />)}
            </div>
        </div>
       
    )
}
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

export default function ProductList() {
    return (
        <div className="productList">
            <div className="productList-texts">
                <div className="productList-title">Create & Inspire. JALESnotJAQUE</div>
                <p className="productList-desc">
                    namae is a creative portfolio that your work has been waiting for
                    beutiful homes, stunning portfolio styles &  a whole lot more
                    inside.
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
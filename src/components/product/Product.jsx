import "./product.css"

export default function Product({img,link}) {
    return (
        <div className="product" >
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={link} target="_blank" rel="nonreferrer nonopener">
                <img src={img} alt="project"  className="product-img"/>
            </a>
        </div>
    )
}
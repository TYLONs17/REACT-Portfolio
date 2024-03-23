import "./product.css"

export default function Product({img, title, description ,link}) {
    return (
        <div className="product" >
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <div className="">
                <h1 className="product-title">{title}</h1>
                <p className="product-description">{description}</p>
            </div>
            <a href={link} target="_blank" rel="nonreferrer nonopener noreferrer">
                <img src={img} alt="project"  className="product-img"/>
            </a>
        </div>
    )
}
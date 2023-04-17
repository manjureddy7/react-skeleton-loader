import './Products.css';

function Products(props: { products: any}) {
    const { products=[] } = props;
    console.log('products are', products);
    return <div className='row'>
        {products.map((product: any) => (
                <div className="col-3" key={product.id}>
                    <div className="product">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="product-body">
                            <div className="product-title">{product.title.slice(0, 30)}</div>
                            <div className="product-price">$ {product.price}</div>
                            <div className="product-price">Rating: {product.rating.rate}</div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
}

export default Products;

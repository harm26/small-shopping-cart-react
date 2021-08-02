import React from 'react'

const Product = ({products, addToCart}) => {
    return (
        <>
         {products.map((product) => (
              <div className="box" key={product.id}>
                <h2 className="">{product.name}</h2>
                <p className="">Precio: ${product.price}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            ))}   
        </>
    )
}

export default Product

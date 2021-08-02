
export const ShoppingCart = ({cart, removeOne, removeFromCart, addToCart}) => {
    return (
        <div className = "text-center">

{cart.map((elem) => (
              <div className="elem" key={elem.id}>
                <div className="block-1">
                  <h5 className="name">{elem.name}</h5>
                  <p className="block-3">
                    <strong>Price</strong>: {elem.quantity} x ${elem.price}
                  </p>

                  <div className="block-2">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        removeOne(elem);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-primary btn-plus"
                      onClick={() => {
                        addToCart(elem);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-outline-danger btn-remove"
                    onClick={() => removeFromCart(elem)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
            
        </div>
    )
}

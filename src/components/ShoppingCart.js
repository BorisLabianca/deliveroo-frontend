import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  return (
    <div className="basket-section">
      {shoppingCart.length !== 0 ? (
        <div className="full-basket">
          <button className="validate">Valider mon panier</button>
          <div className="cart-content">
            {shoppingCart.map((item, index) => {
              return (
                <div key={item.id} className="cart-item">
                  <div className="item-counter">
                    <FontAwesomeIcon
                      icon="circle-minus"
                      className="minus-btn"
                      onClick={() => {
                        const newShoppingCart = [...shoppingCart];
                        if (newShoppingCart[index].quantity > 1) {
                          newShoppingCart[index].quantity =
                            newShoppingCart[index].quantity - 1;
                          //   newShoppingCart[index].total =
                          //     item.price * newShoppingCart[index].quantity;
                          const newTotal =
                            item.price * newShoppingCart[index].quantity;
                          newShoppingCart[index].total = newTotal.toFixed(2);
                          setShoppingCart(newShoppingCart);
                        } else {
                          newShoppingCart.splice([index], 1);
                          setShoppingCart(newShoppingCart);
                        }
                      }}
                    />
                    <span>{item.quantity}</span>
                    <FontAwesomeIcon
                      icon="circle-plus"
                      className="plus-btn"
                      onClick={() => {
                        const newShoppingCart = [...shoppingCart];
                        newShoppingCart[index].quantity =
                          newShoppingCart[index].quantity + 1;
                        // newShoppingCart[index].total =
                        //   item.price * newShoppingCart[index].quantity;
                        const newTotal =
                          item.price * newShoppingCart[index].quantity;
                        newShoppingCart[index].total = newTotal.toFixed(2);
                        setShoppingCart(newShoppingCart);
                      }}
                    />
                  </div>
                  <span className="item">{item.title}</span>
                  <span className="item-total">{item.total} €</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="empty-basket">
          <button className="validate">Valider mon panier</button>
          <div className="cart-content">Votre panier est vide</div>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;

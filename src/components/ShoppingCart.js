import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart = ({
  shoppingCart,
  setShoppingCart,
  subTotal,
  setSubTotal,
  bigTotal,
  setBigTotal,
  deliveryFees,
}) => {
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
                          const intSubTotal =
                            parseFloat(subTotal) - parseFloat(item.price);
                          const newSubTotal = intSubTotal.toFixed(2);
                          setSubTotal(newSubTotal);
                          const intBigTotal =
                            parseFloat(newSubTotal) + parseFloat(deliveryFees);
                          const newBigTotal = intBigTotal.toFixed(2);
                          setBigTotal(newBigTotal);
                        } else {
                          newShoppingCart.splice([index], 1);
                          setShoppingCart(newShoppingCart);
                          const intSubTotal =
                            parseFloat(subTotal) - parseFloat(item.price);
                          const newSubTotal = intSubTotal.toFixed(2);
                          setSubTotal(newSubTotal);
                          const intBigTotal =
                            parseFloat(newSubTotal) + parseFloat(deliveryFees);
                          const newBigTotal = intBigTotal.toFixed(2);
                          setBigTotal(newBigTotal);
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
                        const intSubTotal =
                          parseFloat(item.price) + parseFloat(subTotal);
                        const newSubTotal = intSubTotal.toFixed(2);
                        setSubTotal(newSubTotal);
                        const intBigTotal =
                          parseFloat(newSubTotal) + parseFloat(deliveryFees);
                        const newBigTotal = intBigTotal.toFixed(2);
                        setBigTotal(newBigTotal);
                      }}
                    />
                  </div>
                  <span className="item">{item.title}</span>
                  <span className="item-total">{item.total} €</span>
                </div>
              );
            })}
          </div>
          <div className="sous-totaux">
            <div className="sous-total">
              <span>Sous-total</span>
              <span>{subTotal} €</span>
            </div>
            <div className="livraison">
              <span>Frais de livraison</span>
              <span>2.50 €</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{bigTotal} €</span>
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuItemCard = ({
  title,
  description,
  picture,
  price,
  popular,
  shoppingCart,
  setShoppingCart,
  id,
  subTotal,
  setSubTotal,
  bigTotal,
  setBigTotal,
  deliveryFees,
}) => {
  return (
    <div
      className="card"
      onClick={
        () => {
          // console.log(title, price, id);
          const newShoppingCart = [...shoppingCart];
          // console.log(shoppingCart);
          let isPresent = false;
          for (let i = 0; i < shoppingCart.length; i++) {
            if (newShoppingCart[i].id === id) {
              isPresent = true;
              newShoppingCart[i].quantity = newShoppingCart[i].quantity + 1;
              // newShoppingCart[i].total =
              //   newShoppingCart[i].price * newShoppingCart[i].quantity;
              const newTotal =
                newShoppingCart[i].price * newShoppingCart[i].quantity;
              newShoppingCart[i].total = newTotal.toFixed(2);
              setShoppingCart(newShoppingCart);
              const intSubTotal = parseFloat(price) + parseFloat(subTotal);
              const newSubTotal = intSubTotal.toFixed(2);
              setSubTotal(newSubTotal);
              const intBigTotal =
                parseFloat(newSubTotal) + parseFloat(deliveryFees);
              const newBigTotal = intBigTotal.toFixed(2);
              setBigTotal(newBigTotal);
            }
          }
          if (!isPresent) {
            newShoppingCart.push({
              title: title,
              price: price,
              id: id,
              quantity: 1,
              total: price,
            });
            // } else {
            // newShoppingCart[index].quantity = newShoppingCart[index].quantity + 1;
            // newShoppingCart[index].total =
            //   price * newShoppingCart[index].quantity;
            // console.log(shoppingCart.id);
            setShoppingCart(newShoppingCart);
            const intSubTotal = parseFloat(subTotal) + parseFloat(price);
            const newSubTotal = intSubTotal.toFixed(2);
            setSubTotal(newSubTotal);
            const intBigTotal =
              parseFloat(newSubTotal) + parseFloat(deliveryFees);
            const newBigTotal = intBigTotal.toFixed(2);
            setBigTotal(newBigTotal);
          }

          // console.log(newShoppingCart);
          // setShoppingCart(newShoppingCart);
        }
        // console.log(newShoppingCart);
      }
    >
      <div className="menu-info">
        <h3 className="menu-name">{title}</h3>
        {description && <p className="menu-description">{description}</p>}
        <div className="price-pop">
          <span className="price">{price} €</span>
          {popular && (
            <span className="populaire">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </div>
      </div>
      {picture && <img className="item-pic" src={picture} alt="Meal" />}
    </div>
  );
};
export default MenuItemCard;

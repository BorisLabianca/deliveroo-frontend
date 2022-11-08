import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo-teal.svg";
import Category from "./components/Category";
import ShoppingCart from "./components/ShoppingCart";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faCirclePlus, faCircleMinus);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--67k4ycyfnl9b.code.run/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <header>
        <div>
          <div className="logo-bar">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="sublogo container">
            <div className="restaurant-info">
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <div className="header-img">
              <img src={data.restaurant.picture} alt="Table d'un brunch" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container main-container">
          <div className="categories">
            {data.categories.map((cat, index) => {
              if (cat.meals.length !== 0) {
                return (
                  <Category
                    key={index}
                    name={cat.name}
                    meals={cat.meals}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          {/* <div className="basket-section">
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
                          />
                          <span>{item.quantity}</span>
                          <FontAwesomeIcon
                            icon="circle-plus"
                            className="plus-btn"
                            onClick={() => {
                              const newShoppingCart = [...shoppingCart];
                              newShoppingCart[index].quantity =
                                newShoppingCart[index].quantity + 1;
                              newShoppingCart[index].price =
                                item.price * newShoppingCart[index].quantity;
                              setShoppingCart(newShoppingCart);
                            }}
                          />
                        </div>
                        <span className="item">{item.title}</span>
                        <span className="item-total">{item.price} €</span>
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
          </div> */}
          <ShoppingCart
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

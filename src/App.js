import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo-teal.svg";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "site--deliveroo-backend--67k4ycyfnl9b.code.run"
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
        <div className="container">
          <div className="categories">
            {data.categories.map((cat, index) => {
              if (cat.meals.length !== 0) {
                return (
                  <Category key={index} name={cat.name} meal={cat.meals} />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

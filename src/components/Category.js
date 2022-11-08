import MenuItemCard from "./MenuItemCard";
const Category = ({ name, meals, shoppingCart, setShoppingCart }) => {
  return (
    <div className="each-category">
      <h2 className="restaurant-name">{name}</h2>
      <div className="menu-item-card">
        {meals.map((meal, index) => {
          // console.log(cat);
          return (
            <MenuItemCard
              key={meal.id}
              title={meal.title}
              description={meal.description}
              picture={meal.picture}
              price={meal.price}
              popular={meal.popular}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              id={meal.id}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Category;

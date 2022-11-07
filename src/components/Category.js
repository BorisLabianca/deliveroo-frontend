import MenuItemCard from "./MenuItemCard";
const Category = ({ name, meal }) => {
  return (
    <div className="each-category">
      <h2 className="restaurant-name">{name}</h2>
      <div className="menu-item-card">
        {meal.map((cat, index) => {
          // console.log(cat);
          return (
            <MenuItemCard
              key={index}
              title={cat.title}
              description={cat.description}
              picture={cat.picture}
              price={cat.price}
              popular={cat.popular}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Category;

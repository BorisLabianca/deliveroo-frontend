import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuItemCard = ({ title, description, picture, price, popular }) => {
  return (
    <div className="card">
      <div className="menu-info">
        <h3 className="menu-name">{title}</h3>
        {description && <p className="menu-description">{description}</p>}
        <div className="price-pop">
          <span className="price">{price} €</span>
          {popular ? (
            <span className="populaire">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          ) : null}
        </div>
      </div>
      {picture && <img className="item-pic" src={picture} alt="Meal" />}
    </div>
  );
};
export default MenuItemCard;

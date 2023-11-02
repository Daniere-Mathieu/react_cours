import { IDrinkFilter } from "../interfaces/ICocktailFilter";

function Detail({ drink }: { drink: IDrinkFilter }) {
  return (
    <div className="detail-container">
      <div>
        {drink.strDrinkThumb && (
          <img
            className="detail-image"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
        )}
      </div>
      <div className="detail-right">
        <h2 className="detail-title">{drink.strDrink}</h2>

        <p className="detail-text">Category: {drink.strCategory}</p>
        <p className="detail-text">Alcoholic: {drink.strAlcoholic}</p>
        <p className="detail-text">Glass: {drink.strGlass}</p>
        <p className="detail-text">Instructions: {drink.strInstructions}</p>
        {drink.strIngredient && drink.strMeasure && (
          <ul className="detail-list">
            {drink.strIngredient.map((ingredient, index) => (
              <li className="detail-list-item" key={index}>
                {ingredient}{" "}
                {drink.strMeasure ? ":" + drink.strMeasure[index] || "" : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Detail;

import { FormEvent, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useEnums } from "../hooks/useEnums";
import { useCocktailsByEnums } from "../hooks/useCocktailsByEnums";
import Card from "../components/Card";
import Loading from "../components/Loading";

function AdvancedSearch() {
  const { getAlcoholic, getCategories, getGlasses, getIngredients } =
    useEnums();
  const {
    cocktail,
    loading,
    getCocktailsByCategory,
    getCocktailsByAlcoholic,
    getCocktailsByGlass,
    getCocktailsByIngredient,
  } = useCocktailsByEnums();

  const [categories] = useState<string[]>(getCategories());
  const [alcoholic] = useState<string[]>(getAlcoholic());
  const [glasses] = useState<string[]>(getGlasses());
  const [ingredients] = useState<string[]>(getIngredients());

  const [selectedAlcoholic, setSelectedAlcoholic] = useState<string>(
    alcoholic[0]
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const [selectedGlass, setSelectedGlass] = useState<string>(glasses[0]);
  const [selectedIngredient, setSelectedIngredient] = useState<string>(
    ingredients[0]
  );

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const [searchBy, setSearchBy] = useState<string>("");

  const handleSubmitAlcoholic = (event: FormEvent) => {
    event.preventDefault();

    setHasSubmitted(true);
    getCocktailsByAlcoholic(selectedAlcoholic);
    setSearchBy(selectedAlcoholic);
  };

  const handleSubmitCategories = (event: FormEvent) => {
    event.preventDefault();
    setHasSubmitted(true);
    getCocktailsByCategory(selectedCategory);
    setSearchBy(selectedCategory);
  };

  const handleSubmitGlasses = (event: FormEvent) => {
    event.preventDefault();
    setHasSubmitted(true);
    getCocktailsByGlass(selectedGlass);
    setSearchBy(selectedGlass);
  };

  const handleSubmitIngredients = (event: FormEvent) => {
    event.preventDefault();
    setHasSubmitted(true);
    getCocktailsByIngredient(selectedIngredient);
    setSearchBy(selectedIngredient);
  };

  return (
    <MainLayout>
      <div className="form-wrapper">
        <form onSubmit={handleSubmitAlcoholic} className="form">
          <h2>Alcoholic</h2>
          <select
            value={selectedAlcoholic}
            onChange={(e) => setSelectedAlcoholic(e.target.value)}
          >
            {alcoholic.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Search Alcoholic</button>
        </form>
        <form onSubmit={handleSubmitCategories} className="form">
          <h2>Categories</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Search Categories</button>
        </form>
        <form onSubmit={handleSubmitGlasses} className="form">
          <h2>Glasses</h2>
          <select
            value={selectedGlass}
            onChange={(e) => setSelectedGlass(e.target.value)}
          >
            {glasses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Search Glasses</button>
        </form>
        <form onSubmit={handleSubmitIngredients} className="form">
          <h2>Ingredients</h2>
          <select
            value={selectedIngredient}
            onChange={(e) => setSelectedIngredient(e.target.value)}
          >
            {ingredients.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Search Ingredients</button>
        </form>
      </div>
      {hasSubmitted && <p className="search-by">search by : {searchBy} </p>}
      <div className="list-container">
        {hasSubmitted && loading ? (
          <Loading />
        ) : (
          cocktail?.drinks.map((drink, index) => {
            return (
              <Card
                key={index}
                picture={drink.strDrinkThumb}
                title={drink.strDrink}
                id={drink.idDrink}
              />
            );
          })
        )}
      </div>
    </MainLayout>
  );
}

export default AdvancedSearch;

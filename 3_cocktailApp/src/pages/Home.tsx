import Card from "../components/Card";
import Loading from "../components/Loading";
import { useCocktails } from "../hooks/useCocktails";
function Home() {
  const { cocktail, loading } = useCocktails();

  return (
    <div className="list-container">
      {loading ? (
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
  );
}

export default Home;

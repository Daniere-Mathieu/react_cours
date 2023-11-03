import Card from "../components/Card";
import Loading from "../components/Loading";
import { useCocktails } from "../hooks/useCocktails";
import MainLayout from "../layouts/MainLayout";
function Home() {
  const { cocktail, loading } = useCocktails();

  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default Home;

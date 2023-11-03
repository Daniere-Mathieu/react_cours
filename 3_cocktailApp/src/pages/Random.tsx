import Detail from "../components/Detail";
import Loading from "../components/Loading";
import { useRandomCocktail } from "../hooks/useRandomCocktail";
import MainLayout from "../layouts/MainLayout";

function Random() {
  const { cocktail, loading } = useRandomCocktail();
  
  return (
    <MainLayout>
      {loading ? <Loading /> : cocktail ? <Detail drink={cocktail} /> : <div>Not found</div>}
    </MainLayout>
  );
}

export default Random;

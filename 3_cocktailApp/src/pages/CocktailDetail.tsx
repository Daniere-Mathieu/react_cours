
import Detail from "../components/Detail";
import Loading from "../components/Loading";
import { useCocktail } from "../hooks/useCocktail";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; // Make sure the import path is correct

function CocktailDetail() {
  const { id } = useParams<{ id: string }>();

  const { cocktail, loading } = useCocktail(id as string);
  
  // Wrap the returned JSX in the MainLayout component
  return (
    <MainLayout>
      {loading ? <Loading /> : cocktail ? <Detail drink={cocktail} /> : <div>Not found</div>}
    </MainLayout>
  );
}

export default CocktailDetail;

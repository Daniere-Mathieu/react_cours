import Detail from "../components/Detail";
import Loading from "../components/Loading";
import { useCocktail } from "../hooks/useCocktail";
import { useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams<{ id: string }>();

  const { cocktail, loading } = useCocktail(id as string);
  if (!cocktail) return <div>Not found</div>;

  return <>{loading ? <Loading /> : <Detail drink={cocktail} />}</>;
}

export default CocktailDetail;

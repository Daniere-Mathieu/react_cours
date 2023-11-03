import { useState } from "react";
import { Cocktail } from "../Cocktail";
import { ICocktailFilter } from "../interfaces/ICocktailFilter";

export function useCocktailsByEnums() {
  const [cocktail, setCocktail] = useState<ICocktailFilter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const cocktailClass = Cocktail.getInstance();

  async function getCocktailsByCategory(category: string) {
    setLoading(true);

    setCocktail(await cocktailClass.getByCategory(category));
    setLoading(false);
  }
  async function getCocktailsByGlass(glass: string) {
    setLoading(true);

    setCocktail(await cocktailClass.getByGlass(glass));
    setLoading(false);
  }
  async function getCocktailsByIngredient(ingredient: string) {
    setLoading(true);

    setCocktail(await cocktailClass.getByIngredient(ingredient));
    setLoading(false);
  }
  async function getCocktailsByAlcoholic(alcoholic: string) {
    setLoading(true);

    console.log(alcoholic);
    setCocktail(await cocktailClass.getByAlcoholic(alcoholic));
    setLoading(false);
  }

  return {
    cocktail,
    loading,
    getCocktailsByCategory,
    getCocktailsByGlass,
    getCocktailsByIngredient,
    getCocktailsByAlcoholic,
  };
}

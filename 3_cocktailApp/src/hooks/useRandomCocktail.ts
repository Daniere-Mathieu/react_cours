import { useState, useEffect } from "react";
import { Cocktail } from "../Cocktail";
import { IDrinkFilter } from "../interfaces/ICocktailFilter";

export function useRandomCocktail() {
  const [cocktail, setCocktail] = useState<IDrinkFilter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getCocktail() {
    setLoading(true);

    const cocktail = Cocktail.getInstance();
    setCocktail(await cocktail.getRandom());
    setLoading(false);
  }

  useEffect(() => {
    getCocktail();
  }, []);

  return { cocktail, loading, getCocktail };
}

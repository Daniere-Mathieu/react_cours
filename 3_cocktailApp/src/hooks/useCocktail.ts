import { useState, useEffect } from "react";
import { Cocktail } from "../Cocktail";
import { IDrinkFilter } from "../interfaces/ICocktailFilter";

export function useCocktail(id: string) {
  const [cocktail, setCocktail] = useState<IDrinkFilter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getCocktail(id: string) {
    setLoading(true);

    const cocktail = Cocktail.getInstance();
    setCocktail(await cocktail.getDetailsById(id));
    setLoading(false);
  }

  useEffect(() => {
    getCocktail(id);
  }, []);

  return { cocktail, loading, getCocktail };
}

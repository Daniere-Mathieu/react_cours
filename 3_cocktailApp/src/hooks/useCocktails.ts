import { useState, useEffect } from "react";
import { Cocktail } from "../Cocktail";
import { ICocktailFilter } from "../interfaces/ICocktailFilter";
import { Category } from "../enums/Category";

export function useCocktails() {
  const [cocktail, setCocktail] = useState<ICocktailFilter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getCocktails() {
    setLoading(true);

    const cocktail = Cocktail.getInstance();
    // i use this to get 100 cocktails with just one call
    setCocktail(await cocktail.getByCategory(Category.ORDINARY_DRINK));
    setLoading(false);
  }

  useEffect(() => {
    getCocktails();
  }, []);

  return { cocktail, loading, getCocktails };
}

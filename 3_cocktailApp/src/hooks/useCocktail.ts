import { useState, useEffect } from "react";
import { Cocktail } from "../Cocktail";
import { Category } from "../enums/Category";
import { ICocktailFilter } from "../interfaces/ICocktailFilter";

export function useCocktail() {
  const [cocktail, setCocktail] = useState<ICocktailFilter | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getCocktail() {
    const cocktail = Cocktail.getInstance();
    setCocktail(await cocktail.getByCategory(Category.COCKTAIL));
  }

  useEffect(() => {
    getCocktail();
  }, []);
}

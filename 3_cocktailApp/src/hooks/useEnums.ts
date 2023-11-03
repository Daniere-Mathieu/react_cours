import { Alcoholic } from "../enums/Alcoholic";
import { Category } from "../enums/Category";
import { Glass } from "../enums/Glass";
import { Ingredient } from "../enums/Ingredient";

export function useEnums() {
  function getCategories(): string[] {
    return Object.values(Category).filter((value) => typeof value === "string");
  }
  function getIngredients(): string[] {
    return Object.values(Ingredient).filter(
      (value) => typeof value === "string"
    );
  }
  function getAlcoholic(): string[] {
    return Object.values(Alcoholic).filter(
      (value) => typeof value === "string"
    );
  }
  function getGlasses(): string[] {
    return Object.values(Glass).filter((value) => typeof value === "string");
  }

  return { getCategories, getIngredients, getAlcoholic, getGlasses };
}

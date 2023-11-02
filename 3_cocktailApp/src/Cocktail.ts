import { CocktailEndpoints } from "./enums/CocktailEndpoints";
import { Category } from "./enums/Category";
export class Cocktail {
  private _urlPath: string = "https://www.thecocktaildb.com/api/json/v1/1/";

  private async _fetchApi<T>(endpoint: string): Promise<T | null> {
    const response = await fetch(`${this._urlPath}${endpoint}`);
    if (!response.ok) return null;

    const data = await response.json();

    if (!data) return null;

    return data;
  }

  async getByCategory(category: string) {
    if (
      !category &&
      !Object.values(Category).includes(category as unknown as Category)
    )
      return null;
    const result = this._fetchApi(
      CocktailEndpoints.FILTER_BY_CATEGORY + category
    );
  }
}

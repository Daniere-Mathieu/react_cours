import { CocktailEndpoints } from "./enums/CocktailEndpoints";
import { Category } from "./enums/Category";
import { ICocktail, IDrink } from "./interfaces/ICocktail";
import { ICocktailFilter, IDrinkFilter } from "./interfaces/ICocktailFilter";
import { Ingredient } from "./enums/Ingredient";
import { Alcoholic } from "./enums/Alcoholic";
import { Glass } from "./enums/Glass";
import { enumsContainsValue } from "./utils/enums";

export class Cocktail {
  private _urlPath: string = "https://www.thecocktaildb.com/api/json/v1/1/";
  static instance: Cocktail;

  private constructor() {}

  static getInstance() {
    if (!Cocktail.instance) {
      Cocktail.instance = new Cocktail();
    }

    return Cocktail.instance;
  }

  private async _fetchApi<T>(endpoint: string): Promise<T | null> {
    try {
      const response = await fetch(`${this._urlPath}${endpoint}`);
      if (!response.ok) return null;

      const data = await response.json();

      if (!data) return null;

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching data");
    }
  }

  private transformCocktailToCocktailFilter(
    cocktail: ICocktail
  ): ICocktailFilter {
    // Define the ingredient number type
    type IngredientNumber =
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15";

    const drinks: IDrinkFilter[] = cocktail.drinks.map((drink) => {
      const ingredients: null | string[] = [];
      const measures: null | string[] = [];

      // Extract ingredients and measures
      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}` as keyof IDrink] as
          | string
          | null;
        const measure = drink[`strMeasure${i}` as keyof IDrink] as
          | string
          | null;

        if (ingredient) {
          ingredients.push(ingredient);
          measures.push(measure ? measure : "");
        }
      }

      // Build the drink filter object
      const drinkFilter: IDrinkFilter = {
        ...drink,
        strIngredient: ingredients.length > 0 ? ingredients : null,
        strMeasure: measures.length > 0 ? measures : null,
        // Remove the strIngredientX and strMeasureX properties
        ...(Object.fromEntries(
          Object.entries(drink).filter(
            ([key]) =>
              !key.startsWith("strIngredient") && !key.startsWith("strMeasure")
          )
        ) as Omit<
          IDrink,
          `strIngredient${IngredientNumber}` | `strMeasure${IngredientNumber}`
        >),
      };

      return drinkFilter;
    });

    return { drinks };
  }

  public async getByCategory(
    category: string
  ): Promise<ICocktailFilter | null> {
    if (
      !category &&
      !enumsContainsValue(Category, category as unknown as Category)
    )
      return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.FILTER_BY_CATEGORY + category
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }

  public async getByIngredient(
    ingredient: string
  ): Promise<ICocktailFilter | null> {
    if (
      !ingredient &&
      !enumsContainsValue(Ingredient, ingredient as unknown as Ingredient)
    )
      return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.FILTER_BY_INGREDIENT + ingredient
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }

  public async getByAlcoholic(
    alcoholic: string
  ): Promise<ICocktailFilter | null> {
    if (
      !alcoholic &&
      !enumsContainsValue(Alcoholic, alcoholic as unknown as Alcoholic)
    )
      return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.FILTER_BY_ALCOHOLIC + alcoholic
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }

  public async getByGlass(glass: string): Promise<ICocktailFilter | null> {
    if (!glass && !enumsContainsValue(Glass, glass as unknown as Glass))
      return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.FILTER_BY_GLASS + glass
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }

  public async getRandom(): Promise<IDrinkFilter | null> {
    const result = await this._fetchApi<ICocktail>(CocktailEndpoints.RANDOM);

    if (result) {
      return this.transformCocktailToCocktailFilter(result)
        .drinks[0] as IDrinkFilter;
    }
    return result;
  }

  public async getByName(name: string): Promise<ICocktailFilter | null> {
    if (!name) return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.SEARCH_BY_NAME + name
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }

  public async getDetailsById(id: string): Promise<IDrinkFilter | null> {
    if (!id) return null;
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.DETAILS_COCKTAILS + id
    );

    if (result) {
      return this.transformCocktailToCocktailFilter(result)
        .drinks[0] as IDrinkFilter;
    }
    return result;
  }

  public async getByNameFirstLetter(
    firstLetter: string
  ): Promise<ICocktailFilter | null> {
    if (!firstLetter) return null;
    if (firstLetter.length > 1)
      firstLetter = firstLetter[0].toLowerCase().replace(/[^a-z]/g, () => "a");
    const result = await this._fetchApi<ICocktail>(
      CocktailEndpoints.SEARCH_BY_FIRST_LETTER + firstLetter
    );
    if (result) {
      return this.transformCocktailToCocktailFilter(result);
    }
    return result;
  }
}

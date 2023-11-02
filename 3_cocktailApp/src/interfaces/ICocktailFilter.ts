export interface ICocktailFilter {
  drinks: IDrinkFilter[];
}

export interface IDrinkFilter {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: null | string;
  strTags: null | string;
  strVideo: null | string;
  strCategory: string;
  strIBA: null | string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: null | string;
  strInstructionsDE: null | string;
  strInstructionsFR: null | string;
  strInstructionsIT: null | string;
  strInstructionsZH_HANS: null | string;
  strInstructionsZH_HANT: null | string;
  strDrinkThumb: string;
  strIngredient: null | string[];
  strMeasure: null | string[];
  strImageSource: null | string;
  strImageAttribution: null | string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

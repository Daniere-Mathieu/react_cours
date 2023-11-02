export enum CocktailEndpoints {
  SEARCH_BY_NAME = "search.php?s=",
  SEARCH_BY_FIRST_LETTER = "search.php?f=",
  SEARCH_INGREDIENT_BY_COCKTAIL_NAME = "search.php?i=",

  DETAILS_COCKTAILS = "lookup.php?i=",
  DETAILS_INGREDIENTS = "lookup.php?iid=",

  RANDOM = "random.php",

  FILTER_BY_INGREDIENT = "filter.php?i=",
  FILTER_BY_ALCOHOLIC = "filter.php?a=",
  FILTER_BY_CATEGORY = "filter.php?c=",
  FILTER_BY_GLASS = "filter.php?g=",

  LIST = "list.php?c=list",
  LIST_INGREDIENTS = "list.php?i=list",
  LIST_GLASSES = "list.php?g=list",
  LIST_ALCOHOLIC = "list.php?a=list",
}

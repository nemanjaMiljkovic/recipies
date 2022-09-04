type IngredientName = `strIngredient${number}`

export interface Cocktail {
    strDrink: string
    strDrinkThumb: string
    [key: IngredientName]: string
}

export interface GetCocktailByNameResponse {
    drinks: Cocktail[]
}

export interface CocktailState extends Omit<Cocktail, 'IngredientName'> {
    ingredients: string[]
}

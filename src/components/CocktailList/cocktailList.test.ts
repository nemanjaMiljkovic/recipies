import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/svelte'
import CocktailList from './CocktailList.svelte'
import type { CocktailState } from '../../types/cocktail'

const cocktailsMock: CocktailState[] = [
    {
        strDrink: 'Drink 1',
        strDrinkThumb: 'http://somelink/1',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    },
    {
        strDrink: 'Drink 1',
        strDrinkThumb: 'http://somelink/1',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    },
]

describe('CocktailList', () => {
    it('Should render nothing when list is empty', async () => {
        render(CocktailList)
        const list = await screen.queryByTestId('list')

        expect(list).not.toBeInTheDocument()
    })

    it('Should render list', () => {
        render(CocktailList, {
            cocktails: cocktailsMock,
        })

        const listItems = screen.getAllByTestId('item')

        expect(listItems).toHaveLength(2)
    })

    it('Should have items with proper content', () => {
        render(CocktailList, {
            cocktails: [cocktailsMock[0]],
        })

        const title: HTMLParagraphElement = screen.getByTestId('title')
        const img: HTMLImageElement = screen.getByTestId('img')
        const ingredients = screen.getAllByTestId('ingredient')

        expect(img).toBeInTheDocument()
        expect(img.src).toBe(cocktailsMock[0].strDrinkThumb)

        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent(cocktailsMock[0].strDrink)

        expect(ingredients).toHaveLength(cocktailsMock[0].ingredients.length)
        expect(ingredients[0]).toHaveTextContent(
            cocktailsMock[0].ingredients[0]
        )
    })
})

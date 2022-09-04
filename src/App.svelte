<script lang="ts">
    import CocktailAPI from './services/cocktails'
    import { filterKeysFromObject } from './utils/objects'
    import type { CocktailState } from './types/cocktail'
    import { onMount } from 'svelte'
    import Form from './components/Form/Form.svelte'
    import CocktailList from './components/CocktailList/CocktailList.svelte'

    let inputRef: HTMLInputElement
    let searchText = ''
    let cocktails: CocktailState[] = []

    onMount(() => {
        inputRef.focus()
    })

    function onSubmit() {
        CocktailAPI.getCocktailByName(searchText).then((res) => {
            cocktails = res.data.drinks.map(
                ({ strDrink, strDrinkThumb, ...rest }) => {
                    const ingredients = filterKeysFromObject(
                        'strIngredient',
                        rest as Record<string, string>
                    )
                    const ingredientValues: string[] =
                        Object.values(ingredients)

                    return {
                        strDrink,
                        strDrinkThumb,
                        ingredients: ingredientValues,
                    }
                }
            )
        })
    }
</script>

<main class="p-20">
    <section class="mb-20">
        <h1 class="text-3xl mb-20">Recipes</h1>
        <Form bind:value={searchText} bind:inputEl={inputRef} {onSubmit} />
    </section>
    <section>
        <CocktailList bind:cocktails />
    </section>
</main>

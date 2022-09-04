<script lang="ts">
    import type { CocktailState } from '../../types/cocktail'

    export let cocktails: CocktailState[] = []
</script>

{#each cocktails as cocktail}
    <div data-testid="item" class="flex mb-12">
        <img
            data-testid="img"
            class="w-20 h-20 mr-6 rounded-md"
            src={cocktail.strDrinkThumb}
            alt="Drink"
        />
        <div>
            <p data-testid="title" class="text-xl font-semibold text-gray-700">
                {cocktail.strDrink}
            </p>
            <p class="text-md text-gray-500 mb-6">
                Instructions how to make the drink
            </p>
            <ul class="list-disc px-4">
                {#each cocktail.ingredients as ingredient}
                    <li data-testid="ingredient" class="mb-4">{ingredient}</li>
                {/each}
            </ul>
        </div>
    </div>
{/each}

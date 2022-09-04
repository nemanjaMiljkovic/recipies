import { fetcher } from './fetcher'
import type { AxiosResponse } from 'axios'
import type { GetCocktailByNameResponse } from '../types/cocktail'

export default {
    getCocktailByName(
        name: string
    ): Promise<AxiosResponse<GetCocktailByNameResponse>> {
        return fetcher.get(`/search.php?s=${name}`)
    },
}

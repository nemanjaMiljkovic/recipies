import axios from 'axios'
import type { AxiosInstance } from 'axios'

class Fetcher {
    fetcherInstance: AxiosInstance
    constructor(private baseURL: string) {
        this.fetcherInstance = axios.create({
            baseURL,
        })
    }
    get(url: string) {
        return this.fetcherInstance.get(url)
    }
}

export const fetcher = new Fetcher(
    'https://www.thecocktaildb.com/api/json/v1/1'
)

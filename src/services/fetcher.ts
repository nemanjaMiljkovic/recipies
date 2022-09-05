import axios from 'axios'
import type { AxiosInstance } from 'axios'

class Fetcher {
    fetcherInstance: AxiosInstance
    constructor(private baseURL: string, timeout: number) {
        this.fetcherInstance = axios.create({
            baseURL,
            timeout,
        })
    }
    get(url: string) {
        return this.fetcherInstance.get(url)
    }
}

export const fetcher = new Fetcher(
    import.meta.env.VITE_API_URL,
    import.meta.env.VITE_REQUEST_TIMEOUT
)

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

describe('App', () => {
    it('Should render App', async () => {
        render(App)
        const heading = screen.getByText('Recipes')
        const form = screen.getByTestId('form')
        const list = await screen.queryByTestId('item')

        expect(heading).toBeInTheDocument()
        expect(form).toBeInTheDocument()
        expect(list).toBeNull()
    })
})

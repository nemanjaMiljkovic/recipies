import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

describe('App', () => {
    it('Should run first test', () => {
        render(App)
        const heading = screen.getByText('Recipes')
        expect(heading).toBeInTheDocument()
    })
})

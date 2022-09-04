import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/svelte'
import Form from './Form.svelte'
import { vi } from 'vitest'

describe('Form', () => {
    it('Should render form', () => {
        render(Form)
        const form = screen.getByTestId('form')
        expect(form).toBeInTheDocument()
    })

    it('Should render input value', async () => {
        render(Form, {
            value: 'sour',
        })
        const input = screen.getByTestId('input')
        expect(input).toHaveValue('sour')

        await fireEvent.change(input, { target: { value: 'sour2' } })

        expect(input).toHaveValue('sour2')
    })

    it('Should call submit function', async () => {
        const mockedOnSubmit = vi.fn()
        render(Form, {
            onSubmit: mockedOnSubmit,
        })

        const button = screen.getByText('Search')

        await fireEvent.click(button)

        expect(mockedOnSubmit).toBeCalledTimes(1)
    })
})

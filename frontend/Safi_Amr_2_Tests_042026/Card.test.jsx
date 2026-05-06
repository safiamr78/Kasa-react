import { render, screen } from '@testing-library/react'
import Card from '../src/components/Card/Card'

describe('Card', () => {

    // Test 1 : le titre s'affiche
    it('affiche le titre correctement', () => {
        render(<Card title="Appartement Paris" cover="image.jpg" />)
        expect(screen.getByText('Appartement Paris')).toBeInTheDocument()
    })

    // Test 2 : l'image s'affiche avec le bon src
    it('affiche l image avec le bon src', () => {
        render(<Card title="Appartement Paris" cover="image.jpg" />)
        expect(screen.getByRole('img')).toHaveAttribute('src', 'image.jpg')
    })

    // Test 3 : l'image a le bon alt
    it('affiche l image avec le bon alt', () => {
        render(<Card title="Appartement Paris" cover="image.jpg" />)
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Appartement Paris')
    })

    // Test 4 : sans props, rien ne plante
    it('se rend sans planter si pas de props', () => {
        render(<Card />)
    })

})
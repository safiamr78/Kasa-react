import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapse from '../src/components/Collapse/Collapse'

describe('Collapse', () => {

    // Test 1 : le titre s'affiche
    it('affiche le titre correctement', () => {
        render(<Collapse title="Équipements" content="Cuisine, Wifi" />)
        expect(screen.getByText('Équipements')).toBeInTheDocument()
    })

    // Test 2 : le contenu est caché par défaut
    it('le contenu est caché au départ', () => {
        render(<Collapse title="Équipements" content="Cuisine, Wifi" />)
        expect(screen.queryByText('Cuisine, Wifi')).not.toBeInTheDocument()
    })

    // Test 3 : clic sur la flèche → contenu visible
    it('affiche le contenu après un clic', async () => {
        render(<Collapse title="Équipements" content="Cuisine, Wifi" />)
        await userEvent.click(screen.getByRole('img', { name: 'arrow' }))
        expect(screen.getByText('Cuisine, Wifi')).toBeInTheDocument()
    })

    // Test 4 : double clic → contenu caché à nouveau
    it('cache le contenu après un second clic', async () => {
        render(<Collapse title="Équipements" content="Cuisine, Wifi" />)
        await userEvent.click(screen.getByRole('img', { name: 'arrow' }))
        await userEvent.click(screen.getByRole('img', { name: 'arrow' }))
        expect(screen.queryByText('Cuisine, Wifi')).not.toBeInTheDocument()
    })

})
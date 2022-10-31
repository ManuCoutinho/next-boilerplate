import { screen, render } from '@testing-library/react'
import Home from '../pages/index'

describe('<Home />', () => {
  it('should render ', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /Awesome Next.js@13 boilerplate/i })
    ).toBeInTheDocument()
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../Home'

test('Testing a home page with 3 buttons', () => {
  // render(<Home />, { wrapper: BrowserRouter })
  render(
    <Router>
      <Home />
    </Router>
  )
  const firstText = screen.getByText(/Welcome to Bored Koala/i)
  expect(firstText).toBeInTheDocument()

  const secondText = screen.getByText(/what would you like to do today/i)
  expect(secondText).toBeInTheDocument()

  const firsrButton = screen.getByRole('button', { name: 'Browse Movie' })
  expect(firsrButton).toBeInTheDocument()
  fireEvent.click(firsrButton)

  const secondButton = screen.getByRole('button', { name: 'Search Music' })
  expect(secondButton).toBeInTheDocument()
  fireEvent.click(secondButton)

  const thirdButton = screen.getByRole('button', { name: 'Get Random Jokes' })
  expect(thirdButton).toBeInTheDocument()
  fireEvent.click(thirdButton)
})

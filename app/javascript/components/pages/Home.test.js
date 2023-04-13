import React from 'react';
import "@testing-library/jest-dom"
import { render, screen }  from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom'


describe("<Home />", () => {
  it("renders a header", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const h1 = screen.getByRole('heading', {
    name: /welcome to apartment app/i,
    })
      expect(h1).toBeInTheDocument();

    const h3 = screen.getByRole('heading', {
    name: /your one step away from finding your dream apartment/i,
    })
      expect(h3).toBeInTheDocument();
  })
})
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
        const header = screen.getByRole('heading', {
        name: /welcome to apartment app/i,
    })
    expect(header).toBeInTheDocument();
    })
})
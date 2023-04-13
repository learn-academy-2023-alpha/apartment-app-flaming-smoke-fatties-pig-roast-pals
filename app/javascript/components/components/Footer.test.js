import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Footer from './Footer'

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const apartment = userEvent.click(screen.getByText(/apartment app/i));

    const backToTop = userEvent.click(screen.getByRole("link", {
        name: /back to top/i}))
  })
})
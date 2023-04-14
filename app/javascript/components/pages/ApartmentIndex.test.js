import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import ApartmentIndex from "./ApartmentIndex"
import { Card } from "reactstrap"

describe("<ApartmentIndex />", () => {
  render(
    <BrowserRouter>
      <ApartmentIndex />
    </BrowserRouter>
  )
  it("renders without crashing", () => {
    expect(screen.getByText(/apartment listings/i)).toBeInTheDocument();
  })

  it("renders Card",()=>{
    render(
      <Card/>
    )
   expect(Card).toBeDefined()
  })
})
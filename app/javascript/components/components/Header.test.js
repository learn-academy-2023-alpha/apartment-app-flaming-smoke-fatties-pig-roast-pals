import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
  })

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true}/>
      </BrowserRouter>
    )
    const allApartments = userEvent.click(screen.getByRole("link", {
        name: /view listings/i
      }))
    const myApartments = userEvent.click(screen.getByRole("link", {
      name: /my listings/i
    }))
    const home = userEvent.click(screen.getByText(/home/i));

    const signOut = userEvent.click(screen.getByText(/sign out/i));
   
    const createApartment = userEvent.click(screen.getByRole("link", {
        name: /create apartment/i
    }))
  })
  
  it("has clickable links for an unregister user", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={false}/>
      </BrowserRouter>
    )

    const myApartments = userEvent.click(screen.getByRole("link", {
      name: /view listings/i
    }))

    const home = userEvent.click(screen.getByText(/home/i));

    const signIn = userEvent.click(screen.getByText(/sign in/i));

    const signUp = userEvent.click(screen.getByText(/sign up/i));
  })

})
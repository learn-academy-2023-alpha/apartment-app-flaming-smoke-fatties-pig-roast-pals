import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import ApartmentShow from "./ApartmentShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import apartments from "../mockApartments"

const renderShow = () => {
    render (
        <MemoryRouter initialEntries={["/apartmentshow/1"]}>
            <Routes>
                <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />                
            </Routes>
        </MemoryRouter>
    )
}
describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    renderShow()
    const address=screen.getByText(`Address: ${apartments[0].address}`)
    expect(address).toBeInTheDocument()
  })
})
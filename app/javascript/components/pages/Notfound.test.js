import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import ProtectedIndex from "./ProtectedIndex"

describe("<ProtectedIndex />", () => {
    beforeEach(()=> {
      const current_user = {
          id: 1,
          email: "user1@gmail.com",
          password: "testinggivesmeaheadache"
      }
      const apartments = [
        {
          bedrooms: 5, 
          bathrooms: 1.5, 
          address: '123 fourth street', 
          city: 'Miami', 
          state: 'FL', 
          square_footage: 600, 
          price: 300000, 
          utilities: 'washer, dryer, gas, and electric', 
          pets: true, 
          image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          inside_parking: true,
        }
      ]
    render(
        <BrowserRouter>
          <ProtectedIndex apartments={apartments} current_user={current_user}/>
        </BrowserRouter>
      )
})
    it("renders without crashing", () => {})
     it("Displays header", () => {
    expect(screen.getByText(/my apartment listings/i)).toBeInTheDocument();
  })
})
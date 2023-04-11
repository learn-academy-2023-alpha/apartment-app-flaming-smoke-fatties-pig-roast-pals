import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="/apartmentshow" element={<ApartmentShow />} />
          <Route path="/apartmentnew" element={<ApartmentNew />} />
          <Route path="/apartmentedit" element={<ApartmentEdit />} />
          <Route path="/myapartments" element={<ProtectedIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
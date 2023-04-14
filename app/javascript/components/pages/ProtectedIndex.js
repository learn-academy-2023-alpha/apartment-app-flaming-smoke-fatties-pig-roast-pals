import React from 'react'
import {Card, CardText, CardTitle, CardSubtitle, CardBody, Button} from  'reactstrap'

const ProtectedIndex = ({ apartments , current_user}) => {

  const myApartments = apartments.filter((value => {
    return current_user.id === value.user_id
  }))
  
  return (
    <>
    <h1>My Apartment Listings</h1>
    {myApartments?.map((value,index) => {
      return (
    <Card style={{ width: '18rem' }} key={index}>
      <img 
      src={value.image} 
      alt="App Image"  
      />
    <CardBody>
    <CardTitle tag="h5">
      Address: {value.address}
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Price: ${value.price}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Bedrooms/s: {value.bedrooms}
    </CardSubtitle>
        <a href={`/apartmentshow/${value.id}`}>More Info</a>
    </CardBody>
</Card>

  )
}
  )}
  </>
  )
}

export default ProtectedIndex
import React from 'react'
import {Card, CardText, CardTitle, CardSubtitle, CardBody, Button} from  'reactstrap'

const ApartmentIndex = ({ apartments }) => {
  return ( 
    <>
    <h1>Apartment Listings</h1>
    {apartments?.map((value,index) => {
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

export default ApartmentIndex
import React from 'react'
import {Card, CardText, CardTitle, CardSubtitle, CardBody, Button} from  'reactstrap'
import { useParams }  from 'react-router-dom'

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  let selectedApartment = apartments?.find(apartment => apartment.id === +id)

  return ( 
    <>   
    {selectedApartment && 
    <Card style={{ width: '18rem' }}>
      <img 
      src={selectedApartment.image} 
      alt="App Image"  
      />
    <CardBody>
    <CardTitle tag="h5">
      Address: {selectedApartment.address} 
    </CardTitle>
    <CardTitle tag="h5">
      City: {selectedApartment.city}  
    </CardTitle>
    <CardTitle tag="h5">
      State: {selectedApartment.state} 
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Bedrooms: {selectedApartment.bedrooms}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Bathrooms: {selectedApartment.bathrooms}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Price: ${selectedApartment.price}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      sqft: {selectedApartment.square_footage}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Pets: {selectedApartment.pets}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
       Parking: {selectedApartment.inside_parking }
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
        Utilities: {selectedApartment.utilities}
    </CardSubtitle>
    <CardText>
      <p>fill with extra info</p>
    </CardText>
    <Button>For edit page</Button>
    <a href={`/apartmentindex`}>All Listings</a>
  </CardBody>
</Card>
}
</>
  )
}

export default ApartmentShow
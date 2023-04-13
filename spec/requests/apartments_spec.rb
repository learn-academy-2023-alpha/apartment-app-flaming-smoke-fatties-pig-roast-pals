require 'rails_helper'

RSpec.describe "Apartments", type: :request do
let (:user) {User.create email: 'test@testing.com', password: 'testing123', password_confirmation: 'testing123'}

  describe "GET /index" do
    it 'Gets list of apartments' do
      user.apartments.create(
        bedrooms: 3, 
        bathrooms: 1.5, 
        address: '123 fourth street', 
        city: 'Miami', 
        state: 'FL', 
        square_footage: 600, 
        price: 300000, 
        utilities: 'washer, dryer, gas, and electric', 
        pets: true, 
        image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        inside_parking: true)

        get '/apartments'
        apartment = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartment.length).to eq 1
    end
  end
end

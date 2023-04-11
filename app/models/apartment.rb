class Apartment < ApplicationRecord
    belongs_to :user

    validates :bedrooms, :bathrooms, :address, :city, :state, :square_footage, :price, :utilities,
    :pets, :image, :inside_parking, presence: true
end

import { i_hotel, i_made_hotel } from "../types";





export function hotel_to_object(hotel: i_made_hotel): i_hotel {
    return {
        _id: hotel.get.id(),
        name: hotel.get.name(),
        start_date: hotel.get.start_date(),
        end_date: hotel.get.end_date(),
        slug: hotel.get.slug(),
        city: hotel.get.city(),
        price: hotel.get.price(),
        rooms: hotel.get.rooms(),
        pets: hotel.get.pets(),
        breakfast: hotel.get.breakfast(),
        featured: hotel.get.featured(),
        description: hotel.get.description(),
        extras: hotel.get.extras(),
        images: hotel.get.images()
    }
}
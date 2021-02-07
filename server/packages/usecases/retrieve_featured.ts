import { make_hotel } from "../entities";
import { find_featured, hotel_to_object } from "../adapters";

export function build_retrieve_featured() {
  // FIXME: write your interface for args
  return async function retrieve_featured() {
    const featured = await find_featured();
    const response = [];
    for (let index = 0; index < 3; index++) {
        const hotel = make_hotel(featured[index]);
        response.push(hotel_to_object(hotel));
    }
    return response;
  };
}

import { find_hotel_by_slug, hotel_to_object } from "../adapters";
import { make_hotel } from "../entities";
export function build_retrieve_hotel() {
  return async function retrieve_hotel(slug: string) {
    const data = await find_hotel_by_slug(slug);
    if(data){
      const hotel = make_hotel(data);
    const response = hotel_to_object(hotel);
    return response;
    }
    return "not-found"
  };
}

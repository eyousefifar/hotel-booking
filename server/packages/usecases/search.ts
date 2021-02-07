// import { make_hotel } from "../entities";
import { search_hotel } from "../adapters";

export function build_search() {
  // FIXME: write your interface for args
  return async function search(
    city: string,
    start_date: string,
    end_date: string,
    max_price: string,
    min_size: string,
    max_size: string
  ) {
    const result = await search_hotel(
      city,
      start_date,
      end_date,
      max_price,
      min_size,
      max_size
    );
    if(result){
        return {
            code: 200,
            response: result
        }
    } 
    return {
        code: 404,
        response: "not-found"
    }
  };
}

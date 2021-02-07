import { insert_booking } from "../adapters";
export function build_book_hotel() {
  return async function book_hotel(
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    rooms: string,
    arrival: string,
    departure: string
  ) {
    const result = await insert_booking(
      id,
      first_name,
      last_name,
      email,
      phone,
      rooms,
      arrival,
      departure
    );
    if (result) {
      return {
        code: 201,
        response: {
          success: true,
        },
      };
    } else {
      return {
        code: 500,
        response: {
          success: false,
        },
      };
    }
  };
}

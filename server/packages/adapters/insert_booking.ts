import Datastore from "nedb";
import { i_hotel } from "../types";

export function build_insert_booking(db: Datastore) {
  return function insert_booking(
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    rooms: string,
    arrival: string,
    departure: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      db.insert(
        {
          _id: id,
          first_name,
          last_name,
          email,
          phone,
          rooms,
          arrival,
          departure,
        },
        (err, docs) => {
          if (err) {
            reject(err);
          }
          resolve(!!docs);
        }
      );
    });
  };
}

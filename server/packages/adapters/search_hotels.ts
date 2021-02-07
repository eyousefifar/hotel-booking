import Datastore from "nedb";
import { i_hotel } from "../types";

export function build_search_hotel(db: Datastore) {
  return function search_hotel(
    city: string,
    start_date: string,
    end_date: string,
    max_price: string,
    min_size: string,
    max_size: string
  ): Promise<i_hotel[]> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      db.find({
        city,
        $and: [
          { start_date: { $gte: parseInt(start_date) } },
          { end_date: { $lte: parseInt(end_date) } },
          { rooms: { $gte: parseInt(min_size) } },
          { rooms: { $lte: parseInt(max_size) } },
          { price: { $lte: parseInt(max_price) } },
        ],
      }).sort({price: 1}).exec((err, docs: i_hotel[]) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  };
}

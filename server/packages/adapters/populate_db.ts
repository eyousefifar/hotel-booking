import Datastore from "nedb";
import { existsSync } from "fs";
import { company, address, lorem, random, date } from "faker";
import { join } from "path";
import { nanoid } from "nanoid";

export function build_populate_db(
  db: Datastore,
  uuid: () => string,
  slugify: (name: string) => string
) {
  return function populate_db() {
    const path = join(process.cwd(), "db");
    const exists = existsSync(path);
    if (exists) {
      // if db file exists do not fill it with data
      return;
    }
    const files = [
      "details-1.jpeg",
      "details-2.jpeg",
      "details-3.jpeg",
      "details-4.jpeg",
      "room-1.jpeg",
      "room-2.jpeg",
      "room-3.jpeg",
      "room-4.jpeg",
      "room-5.jpeg",
      "room-6.jpeg",
      "room-7.jpeg",
      "room-8.jpeg",
      "room-9.jpeg",
      "room-10.jpeg",
      "room-11.jpeg",
      "room-12.jpeg",
    ];
    // gather all cities in one place because nedb doesn't support the query for all cities;
    // using set for unique values;
    const cities = [address.city(), address.city(), address.city()];
    for (let index = 0; index < 1000; index++) {
      const name = `${company.companyName()} hotel`;

      const data = {
        _id: uuid(),
        name,
        start_date: date.recent(2).getTime(),
        end_date: date.soon(2).getTime(),
        slug: `${slugify(name)}-${nanoid(8)}`,
        city: cities[index % 3],
        price: 100 + index,
        rooms: index + 1,
        pets: index % 2 === 0,
        breakfast: index % 3 === 0,
        featured: index % 300 === 0,
        description: lorem.paragraph(8),
        extras: [
          lorem.lines(1),
          lorem.lines(1),
          lorem.lines(1),
          lorem.lines(1),
          lorem.lines(1),
        ],
        images: [
          `http://localhost:3001/files/${files[index % (files.length - 1)]}`,
          `http://localhost:3001/files/${files[index % (files.length - 1)]}`,
          `http://localhost:3001/files/${files[index % (files.length - 1)]}`,
          `http://localhost:3001/files/${files[index % (files.length - 1)]}`,
        ],
      };
      db.insert(data, (err, doc) => {
        if (err) {
          throw new Error("hotels data insertion failed");
        }
      });
    }
    db.insert({ all_cities: "cities", list: cities }, (err, doc) => {
      if (err) {
        throw new Error("cities data insertion failed");
      }
    });
  };
}

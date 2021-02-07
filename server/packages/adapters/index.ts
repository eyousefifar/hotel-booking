import slugify from "slugify";
import { v4 } from "uuid";
import { db } from "./init_db";

import { build_find_featured } from "./find_featured";
import { build_populate_db } from "./populate_db";
import { build_find_hotel_by_slug } from "./find_hotel_by_slug";
import { build_search_hotel } from "./search_hotels";
import { build_select_cities } from "./select_cities";
import {  build_insert_booking } from "./insert_booking";
export { hotel_to_object } from "./hotel_to_object";
export const find_featured = build_find_featured(db);

export const find_hotel_by_slug = build_find_hotel_by_slug(db);
export const search_hotel = build_search_hotel(db);
export const select_cities = build_select_cities(db);
export const insert_booking = build_insert_booking(db);

const populate_db = build_populate_db(db, v4, slugify);
populate_db();



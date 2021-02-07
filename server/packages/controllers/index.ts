
// inject controller dependancy and export injected object/ function




import { build_get_retrieve_featured } from "./get_retrieve_featured";
import { build_get_retrieve_hotel } from "./get_retrieve_hotel";
import { build_get_search } from "./get_search";
import {  build_get_retrieve_cities } from "./get_retrieve_cities";
import { build_post_book_hotel } from "./post_book_hotel"
export const get_retrieve_featured = build_get_retrieve_featured();
export const get_retrieve_hotel = build_get_retrieve_hotel();
export const get_search = build_get_search();
export const get_retrieve_cities = build_get_retrieve_cities();


export const post_book_hotel = build_post_book_hotel();
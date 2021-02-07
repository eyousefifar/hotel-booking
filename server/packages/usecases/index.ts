/* 
    inject and export use cases
*/
import { build_retrieve_featured } from "./retrieve_featured";
import { build_retrieve_hotel } from "./retrieve_hotel";
import { build_search } from "./search"
import {  build_retrieve_cities } from "./retrieve_cities";
import {  build_book_hotel } from "./book_hotel";
export const retrieve_featured = build_retrieve_featured();
export const retrieve_hotel = build_retrieve_hotel();
export const search = build_search();
export const retrieve_cities = build_retrieve_cities();
export const book_hotel = build_book_hotel();
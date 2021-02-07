import { v4 } from "uuid";
import slugify from "slugify"

import { build_make_hotel } from "./hotel";



export const make_hotel = build_make_hotel({uuid: v4, slugify});
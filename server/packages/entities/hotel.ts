import { i_build_make_hotel, i_hotel, i_made_hotel } from "../types";
export function build_make_hotel(args: i_build_make_hotel) {
  const { slugify, uuid } = args;
  return function make_hotel(hotel: i_hotel) {
    const {
      _id = uuid(),
      name,
      start_date,
      end_date,
      slug = slugify(name),
      city,
      price,
      rooms,
      pets,
      breakfast,
      featured,
      description,
      extras,
      images,
    } = hotel;

    // no set or action method for this version
    const made_hotel: i_made_hotel = {
      get: {
          id: () => _id,

          name: () => name,
          start_date: () => start_date,
          end_date: () => end_date,
          slug: () => slug,
          city: () => city,
          price: () => price,
          rooms: () => rooms,
          pets: () => pets,
          breakfast: () => breakfast,
          featured: () => featured,
          description: () => description,
          extras: () => extras,
          images: () => images
      },
      set: {},
      action: {},
    };
    

    return Object.freeze(made_hotel);
  };
}

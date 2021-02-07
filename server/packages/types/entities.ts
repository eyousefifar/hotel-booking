/* eslint-disable @typescript-eslint/ban-types */




export interface i_build_make_hotel {
    slugify: (data: string) => string;
    uuid: () => string;
}



export interface i_hotel {
    _id: string | undefined;
    name: string;
    start_date: Date;
    end_date: Date;
    slug: string | undefined;
    city: string;
    price: number;
    rooms: number;
    pets: boolean;
    breakfast: boolean;
    featured: boolean;
    description: string | undefined;
    extras: string[] | undefined;
    images: string[] | undefined;
}



export interface i_made_hotel {
    get: {
        id: () => string;
        name: () => string;
        start_date: () => Date;
        end_date:  () => Date;
        slug: () => string;
        city: () => string;
        price: () => number;
        rooms: () => number;
        pets: () => boolean;
        breakfast: () => boolean;
        featured: () => boolean;
        description: () => string | undefined;
        extras: () => string[] | undefined
        images: () => string[] | undefined;
    }
    set: {}
    action: {}
}
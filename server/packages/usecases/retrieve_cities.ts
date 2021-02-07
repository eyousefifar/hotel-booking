import { select_cities } from "../adapters";

      export function build_retrieve_cities () {
          return async function retrieve_cities () {
              const cities = await select_cities();
              return cities;
          };
      }
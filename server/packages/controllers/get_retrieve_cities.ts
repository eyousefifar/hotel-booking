import { retrieve_cities } from "../usecases";
      export function build_get_retrieve_cities(){
          return async function get_retrieve_cities() {
              const response = await retrieve_cities();
              return response;
          };
      }
import { retrieve_featured } from "../usecases";
export function build_get_retrieve_featured() {
  // TODO: inject any tool that's needed, like request cache
  return async function get_retrieve_featured() {
    try {
        const response = await retrieve_featured();
        return response;
    } catch (error) {
        return error;
    }
  };
}

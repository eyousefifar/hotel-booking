import Datastore from "nedb";

export function build_select_cities(db: Datastore) {
  return function select_cities(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      db.find({ all_cities: "cities" }, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs[0].list);
      });
    });
  };
}

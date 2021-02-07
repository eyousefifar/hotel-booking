import Datastore from "nedb"




export const db = new Datastore({filename: "db", autoload: true,timestampData: true});


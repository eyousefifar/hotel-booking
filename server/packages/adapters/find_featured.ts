import Datastore from "nedb"
import { i_hotel } from "../types"


export function build_find_featured(db: Datastore){
    return function find_featured(): Promise<i_hotel[]>{
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            db.find({featured: true}, (err, docs: i_hotel[]) => {
                if(err){
                    reject(err)
                }
                resolve(docs);
            })
        })
        
    }
}
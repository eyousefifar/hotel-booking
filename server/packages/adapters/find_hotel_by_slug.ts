import Datastore from "nedb"
import { i_hotel } from "../types"


export function build_find_hotel_by_slug(db: Datastore){
    return function find_hotel_by_slug(slug: string): Promise<i_hotel>{
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            db.find({slug}, (err, docs: i_hotel[]) => {
                if(err){
                    reject(err)
                }
                resolve(docs[0]);
            })
        })
        
    }
}
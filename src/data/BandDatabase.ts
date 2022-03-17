import { BandInputDTO } from "../DTO/band/bandInputDTO";
import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";



export class BandDatabase extends BaseDatabase {
    private static NAME_TABLE = ""

    async createBand (id: string, input: BandInputDTO):Promise<void> {
        try{
            await this.getConnection()
                .insert({
                    id: id,
                    name: input.name,
                    music_genre: input.music_genre,
                    responsible: input.responsible
                })
                .into(BandDatabase.NAME_TABLE)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    async getBandById (id: string): Promise<Band> {
        const result = await this.getConnection()
            .select("*")
            .from(BandDatabase.NAME_TABLE)
            .where({ id: id})
        
        return Band.toBandModel(result[0])
    }
}
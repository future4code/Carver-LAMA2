import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../DTO/band/bandInputDTO";
import { Band } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";




export class BandBusiness {
    async createBand (band: BandInputDTO, token: string): Promise<void> {

        if(!token){
            throw new Error('invalid token')
        }

        if(!band){
            throw new Error('Band input not correctly passed')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(id, band)

    }

    async getBandById (id: string, token: string): Promise<Band | undefined > {

        if(!token){
            throw new Error('invalid token')
        }

        if(!id){
            throw new Error('You have not informed an id')
        }

        const bandDatabase = new BandDatabase()
        const result = await bandDatabase.getBandById(id)

        return result
    }




}
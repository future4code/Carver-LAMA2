import { ShowsDatabase } from "../data/ShowsDatabase";
import { ShowsInputDTO } from "../DTO/shows/showsInputDTO";
import { IdGenerator } from "../services/IdGenerator";

export class ShowsBusiness {
    async createShows (input: ShowsInputDTO, token: string): Promise<void> {

        if(!token){
            throw new Error('invalid token')
        }

        if(!input){
            throw new Error('Shows input not correctly passed')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const showsDatabase = new ShowsDatabase()
        await showsDatabase.createShows(id, input)

    }

    async getShowsByDate (date: any, token: string) {

        if(!date){
            throw new Error('Date in params is not passed')
        }

        if(!token){
            throw new Error('invalid token')
        }

        const showsDatabase = new ShowsDatabase()
        const result = await showsDatabase.getShowsByDate(date)

        return result
    }
}
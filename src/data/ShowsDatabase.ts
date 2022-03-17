import { ShowsInputDTO } from "../DTO/shows/showsInputDTO";
import { Shows } from "../model/Shows";
import { BaseDatabase } from "./BaseDatabase";



export class ShowsDatabase extends BaseDatabase {
    private static NAME_TABLE = ""

    async createShows (id: string, input: ShowsInputDTO): Promise<void> {
        try{
            await this.getConnection()
                .insert({
                    id: id,
                    week_day: input.week_day,
                    start_time: input.start_time,
                    end_time: input.end_time,
                    band_id: input.band_id
                })
                .into(ShowsDatabase.NAME_TABLE)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    async getShowsByDate (date: any) {
        const result = await this.getConnection()
            .select("*")
            .from(ShowsDatabase.NAME_TABLE)
            .where({ week_day: date })

            return Shows.toShowsModel(result[0])
    }
}
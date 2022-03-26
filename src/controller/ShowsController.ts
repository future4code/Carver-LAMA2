import { Request, Response } from "express"
import { ShowsBusiness } from "../business/ShowsBusiness";
import { ShowsInputDTO } from "../DTO/shows/showsInputDTO"

export class ShowsController{
    async createShows(req: Request, res: Response): Promise<void> {
        const inputShows: ShowsInputDTO = {
            week_day: req.body.week_day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            band_id: req.body.band_id
        }

        const header: string = req.headers.authorization as string

        try {
            const showsBusiness = new ShowsBusiness()
            const newShows = await showsBusiness.createShows(inputShows, header)

            res.status(201).send("Shows created")
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getShowsByDate(req: Request, res: Response): Promise<void> {
        const date: any = req.query.week_day

        const header: string = req.headers.authorization as string

        try {
            const showsBusiness = new ShowsBusiness()
            const result = await showsBusiness.getShowsByDate(date, header)


            res.status(200).send({ result });
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }


}
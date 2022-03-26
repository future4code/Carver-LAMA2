import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../DTO/band/bandInputDTO";
import { Band } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";





export class BandController {
    async createBand(req: Request, res: Response): Promise<void> {
        const inputBand: BandInputDTO = {
            name: req.body.name,
            music_genre: req.body.music_genre,
            responsible: req.body.responsible
        }

        const header: string = req.headers.authorization as string

        try {
            const bandBusiness = new BandBusiness()
            const newBand = await bandBusiness.createBand(inputBand, header)
            
            res.status(201).send("Band created")
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getBandById(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id as string
        const header: string = req.headers.authorization as string
        try{
            const bandBusiness = new BandBusiness()
            const result = await bandBusiness.getBandById(id, header)

            res.status(200).send({ result });
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}
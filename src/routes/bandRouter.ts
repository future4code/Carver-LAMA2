import express from "express";
import { BandController } from "../controller/BandController";


export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/", bandController.createBand);
bandRouter.get("/:id", bandController.getBandById);
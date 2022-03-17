import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { LoginInputDTO } from "../DTO/user/userLoginDTO";
import { UserInputDTO } from "../DTO/user/userSignupDTO";
import { User } from "../model/User";

export class UserController {
    async signup(req: Request, res: Response): Promise<void> {
        const input: UserInputDTO = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }
        try {

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response): Promise<void> {
        const loginData: LoginInputDTO = {
            email: req.body.email,
            password: req.body.password
        };
        try {

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}
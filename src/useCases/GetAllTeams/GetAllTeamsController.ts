import { QueryValidator } from "../../validators/QueryValidator";
import { GetAllTeamsUseCase } from "./GetAllTeamsUseCase";
import { Request, Response } from 'express';

class GetAllTeamsController {

    constructor(
        private getAllTeamsUseCase: GetAllTeamsUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: query, error } = QueryValidator.validate(req.query);
            if (error) throw new Error(error);

            res.status(200).json(
                await this.getAllTeamsUseCase.execute(query)
            );
        }
        catch (err: any) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetAllTeamsController };
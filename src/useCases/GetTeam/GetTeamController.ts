import { GetTeamUseCase } from "./GetTeamUseCase";
import { Request, Response } from 'express';
import { IdValidator } from "../../validators/IdValidator";

class GetTeamController {

    constructor(
        private getTeamUseCase: GetTeamUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value, error } = IdValidator.validate(req.params);
            if (error) throw new Error(error);

            res.status(200).json(
                await this.getTeamUseCase.execute(value.id)
            );
        }
        catch (err: any) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetTeamController };
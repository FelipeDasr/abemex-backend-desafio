import { IdValidator } from "../../validators/IdValidator";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";
import { Request, Response } from 'express';

class DeleteTeamController {

    constructor(
        private deleteTeamUseCase: DeleteTeamUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value, error } = IdValidator.validate(req.params);
            if (error) throw new Error(error);

            res.status(200).json(
                await this.deleteTeamUseCase.execute(value.id)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { DeleteTeamController };
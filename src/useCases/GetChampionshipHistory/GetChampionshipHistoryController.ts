import { GetChampionshipHistoryUseCase } from "./GetChampionshipHistoryUseCase";
import { IdValidator } from "../../validators/IdValidator";
import { Request, Response } from 'express';

class GetChampionshipHistoryController {

    constructor(
        private getChampionshipHistoryUseCase: GetChampionshipHistoryUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value, error } = IdValidator.validate(req.params);
            if (error) throw new Error(error);

            res.status(200).json(
                await this.getChampionshipHistoryUseCase.execute(value.id)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetChampionshipHistoryController };
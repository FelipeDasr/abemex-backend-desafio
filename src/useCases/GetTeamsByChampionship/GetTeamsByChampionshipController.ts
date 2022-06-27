import { GetTeamsByChampionshipUseCase } from "./GetTeamsByChampionshipUseCase";
import { QueryValidator } from "../../validators/QueryValidator";
import { IdValidator } from "../../validators/IdValidator";
import { Request, Response } from 'express';

class GetTeamsByChampionshipController {

    constructor(
        private getTeamsByChampionshipUseCase: GetTeamsByChampionshipUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            // Validate params
            const { value: params, error: paramsError } = IdValidator.validate(req.params);
            const { value: query, error: queryError } = QueryValidator.validate(req.query);

            // Check errors
            if (paramsError) throw new Error(paramsError);
            else if (queryError) throw new Error(queryError);

            res.status(200).json(
                await this.getTeamsByChampionshipUseCase.execute(params.id, query)
            );
        }
        catch (err: any) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetTeamsByChampionshipController };
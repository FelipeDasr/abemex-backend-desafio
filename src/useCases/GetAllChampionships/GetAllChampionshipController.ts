import { GetAllChampionshipUseCase } from "./GetAllChampionshipUseCase";
import { QueryValidator } from '../../validators/QueryValidator';
import { Request, Response } from 'express';


class GetAllChampionshipController {

    constructor(
        private getAllChampionshipUseCase: GetAllChampionshipUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: query, error } = QueryValidator.validate(req.query);
            if (error) throw new Error(error);
            
            return res.status(200).json(
                await this.getAllChampionshipUseCase.execute(query)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetAllChampionshipController };
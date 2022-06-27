import { GetChampionshipUseCase } from "./GetChampionshipUseCase";
import { Request, Response } from 'express';

class GetChampionshipController {

    constructor(
        private getChampionshipUseCase: GetChampionshipUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            return res.status(200).json(
                await this.getChampionshipUseCase.execute(req.params.id)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { GetChampionshipController };
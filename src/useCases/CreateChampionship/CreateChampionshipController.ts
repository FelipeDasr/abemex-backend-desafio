import { ChampionshipValidator } from "../../validators/ChampionshipValidator";
import { CreateChampionshipUseCase } from "./CreateChampionshipUseCase";
import { Request, Response } from 'express';

class CreateChampionshipController {

    constructor(
        private createChampionshipUseCase: CreateChampionshipUseCase
    ) {}

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: championship, error } = ChampionshipValidator.validate(req.body);
            if (error) throw new Error(error);

            return res.status(201).json(
                await this.createChampionshipUseCase.execute(championship)
            );
        }
        catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }
}

export { CreateChampionshipController };
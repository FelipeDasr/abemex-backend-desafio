import { Request, Response } from 'express';

import { TeamValidator } from '../../validators/TeamValidator';
import { CreateTeamUseCase } from './CreateTeamUseCase';

class CreateTeamController {

    constructor(private createTeamUseCase: CreateTeamUseCase) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: team, error } = TeamValidator.validate(req.body);
            if (error) throw new Error(error);

            res.status(201).json(
                await this.createTeamUseCase.execute(team)
            );
        }
        catch (err: any) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export { CreateTeamController };
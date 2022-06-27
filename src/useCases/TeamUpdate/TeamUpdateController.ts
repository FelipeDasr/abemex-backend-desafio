import { TeamUpdateUseCase } from './TeamUpdateUseCase';
import { Request, Response } from 'express';
import { IdValidator } from '../../validators/IdValidator';
import { TeamValidator } from '../../validators/TeamValidator';

class TeamUpdateController {

    constructor(
        private teamUpdateUseCase: TeamUpdateUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: teamId, error: idError } = IdValidator.validate(req.params);
            const { value: teamData, error: teamError } = TeamValidator.validateUpdate(
                req.body
            );

            if (idError) throw new Error(idError);
            else if (teamError) throw new Error(teamError);

            res.status(200).json(
                await this.teamUpdateUseCase.execute(teamId.id, teamData)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { TeamUpdateController };
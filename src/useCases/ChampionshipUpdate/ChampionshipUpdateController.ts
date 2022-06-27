import { ChampionshipUpdateUseCase } from './ChampionshipUpdateUseCase';
import { Request, Response } from 'express';
import { IdValidator } from '../../validators/IdValidator';
import { ChampionshipValidator } from '../../validators/ChampionshipValidator';

class ChampionshipUpdateController {

    constructor(
        private championshipUpdateUseCase: ChampionshipUpdateUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: teamId, error: idError } = IdValidator.validate(req.params);
            const { value: teamData, error: teamError } = ChampionshipValidator.validateUpdate(
                req.body
            );

            if (idError) throw new Error(idError);
            else if (teamError) throw new Error(teamError);

            res.status(200).json(
                await this.championshipUpdateUseCase.execute(teamId.id, teamData)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { ChampionshipUpdateController };
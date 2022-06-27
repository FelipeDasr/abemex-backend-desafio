import { ChampionshipSubscribeUseCase } from "./ChampionshipSubscribeUseCase";
import { SubscriptionValidator } from "../../validators/SubscriptionValidator";
import { Request, Response } from 'express';

class ChampionshipSubscribeController {

    constructor(
        private championshipSubscribeUseCase: ChampionshipSubscribeUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        try {
            const { value: subscriptionData, error } = SubscriptionValidator.validate(req.body);
            if (error) throw new Error(error);

            res.status(201).json(
                await this.championshipSubscribeUseCase.execute(subscriptionData)
            );
        }
        catch (err: any) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}

export { ChampionshipSubscribeController };
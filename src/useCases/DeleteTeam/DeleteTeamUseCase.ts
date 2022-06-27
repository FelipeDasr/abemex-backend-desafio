import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { TeamRepository } from "../../repositories/TeamRepository";

class DeleteTeamUseCase {

    constructor(
        private teamRepository: TeamRepository,
        private championshipsRepository: ChampionshipRepository
    ) { }

    public async execute(teamId: string) {
        const preSubscriptions = await this.championshipsRepository
            .getPreSubscriptionRegistrationIds(teamId);

        /*
            Get all subscription records that the 'closed' value 
            of the championship table is 'false'
        */
        await this.championshipsRepository.deleteSubscriptionRecords(
            preSubscriptions
        );

        await this.teamRepository.delete(teamId);
        
        return {
            message: "Team successfully deleted"
        };
    }
}

export { DeleteTeamUseCase };
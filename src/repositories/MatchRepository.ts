import { IMatchDTO } from "../dto/MatchDTOs";
import { Match } from "../models/Match";

class MatchRepository {
    public async create(data: IMatchDTO) {
        await Match.create(data);
    }
}

export { MatchRepository };
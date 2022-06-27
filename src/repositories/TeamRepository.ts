import { ChampionshipTeam } from "../models/ChampionshipTeam";
import { Team } from "../models/Team";

import { ITeamDTO, ITeamRecordDTO } from "../dto/TeamDTOs";
import { IQueryDTO } from "../dto/RequestDTOs";

import { paginate } from "./utils";
import { Op } from 'sequelize';

class TeamRepository {

    public async create(teamData: ITeamDTO): Promise<ITeamRecordDTO> {
        return (await Team.create(teamData)).toJSON();
    }

    public async getAllTeams(searchQuery: IQueryDTO) {
        const { page, limit, name } = searchQuery;

        const teams = await Team.findAndCountAll(
            paginate<ITeamRecordDTO>({
                where: name ? { name: { [Op.iLike]: `%${name}%` } } : {},
                order: [
                    ['createdAt', 'DESC']
                ]
            },
                page,
                limit
            )
        );

        return {
            count: teams.count,
            teams: teams.rows,
        }
    }

    public async findById(id: string) {
        const team = await Team.findByPk(id);
        if (!team) throw new Error('The team does not exist');
        return team.toJSON();
    }

    public async findByName(name: string) {
        return await Team.findOne({ where: { name } })
    }

    public async getTeamsByChampionshipId(
        championshipId: string, searchQuery: Omit<IQueryDTO, 'name'>
    ) {

        const teams = await ChampionshipTeam.findAndCountAll(
            paginate({
                where: { championshipId },
                attributes: [],
                include: [{
                    association: 'Team',
                    paranoid: false
                }],
            },
                searchQuery.page,
                searchQuery.limit
            )
        );

        // Check team values
        if (!teams.rows.length) throw new Error("The championship has no registered teams");

        const teamsInJsonFormat = teams.rows.map(teamData => {
            return teamData.toJSON();
        });

        return {
            count: teams.count,
            teams: teamsInJsonFormat as unknown as {
                Team: ITeamRecordDTO
            }[]
        }
    }

    public async update(id: string, data: Partial<ITeamDTO>) {
        const teamUpdated = await Team.update(data, { where: { id } });
        if (!teamUpdated[0]) throw new Error("The team does not exist");

        return {
            message: "Team successfully updated"
        };
    }

    public async delete(id: string) {
        const teamDeleted = await Team.destroy({
            where: { id }
        });

        if (!teamDeleted) throw new Error('The team does not exist');
    }
};

export { TeamRepository };
import { ChampionshipTeam } from "../models/ChampionshipTeam";
import { Championship } from "../models/Championship";

import {
    IChampionshipDTO,
    IChampionshipHistoryRecordDTO,
    IChampionshipRecordDTO,
    IChampionshipSubscribeDTO
} from "../dto/ChampionshipDTOs";
import { IQueryDTO } from "../dto/RequestDTOs";

import { paginate } from "./utils";
import { Op } from "sequelize";

class ChampionshipRepository {

    public async create(data: IChampionshipDTO) {
        const newChampionship = await Championship.create(data);
        return newChampionship.toJSON();
    }

    public async getAllChampionships(searchQuery: IQueryDTO) {
        const { page, limit, name } = searchQuery;

        const Championships = await Championship.findAndCountAll(
            paginate<IChampionshipRecordDTO>({
                where: name ? { name: { [Op.iLike]: `%${name}%` } } : {},
                order: [
                    ['createdAt', 'DESC']
                ],
            },
                page,
                limit
            )
        );

        return {
            count: Championships.count,
            championships: Championships.rows,
        }
    }

    public async findById(id: string) {
        const championship = await Championship.findByPk(id);

        if (!championship) throw new Error('The championship does not exist');
        return championship.toJSON();
    }

    public async findByName(name: string) {
        return await Championship.findOne({ where: { name } });
    }

    public async teamIsAlreadyRegistered(subscriptionData: IChampionshipSubscribeDTO) {
        const { championshipId, teamId } = subscriptionData;
        return await ChampionshipTeam.count({ where: { championshipId, teamId } }) ? true : false;
    }

    public async countTeams(championshipId: string) {
        return await ChampionshipTeam.count({ where: { championshipId } });
    }

    public async addNewTeam(subscriptionData: IChampionshipSubscribeDTO) {
        const { championshipId, teamId } = subscriptionData;
        const newChampionshipTeam = await ChampionshipTeam.create({
            championshipId: championshipId,
            teamId,
        });
        return newChampionshipTeam.toJSON();
    }

    public async closeChampionship(id: string, teamWinnerId: string) {
        await Championship.update({
            closed: true,
            teamWinnerId
        }, {
            where: { id }
        });
    }

    public async getChampionshipHistoryById(championshipId: string) {
        const championshipHistory = await Championship.findByPk(championshipId, {
            include: [
                {
                    association: 'Matches',
                    attributes: {
                        exclude: ['id', 'championshipId']
                    },
                    order: ['level', 'ASC']
                },
                {
                    association: 'Championshipteams',
                    attributes: ['teamId'],
                    include: [{
                        association: 'Team',
                        paranoid: false
                    }],
                    order: ['id', 'ASC']
                }
            ],
        });

        // Check if the champion exists
        if (!championshipHistory) throw new Error('Championship does not exist');

        return championshipHistory.toJSON() as IChampionshipHistoryRecordDTO;
    }

    public async getPreSubscriptionRegistrationIds(teamId: string) {

        const subscriptionRecords = await ChampionshipTeam.findAll({
            where: { teamId },
            attributes: ['id'],
            include: [{
                association: 'Championship',
                where: { closed: false },
                required: true,
                attributes: []
            }]
        });

        return subscriptionRecords.map(ct => ct.toJSON().id);
    }

    public async update(id: string, data: Partial<Omit<IChampionshipDTO, 'levels'>>){
        const championshipUpdated = await Championship.update(data, { where: { id } });
        if (!championshipUpdated[0]) throw new Error("The team does not exist");

        return {
            message: "Team successfully updated"
        };
    }

    public async deleteSubscriptionRecords(ids: string[]) {
        return await ChampionshipTeam.destroy({
            where: { id: ids }
        });
    }
};

export { ChampionshipRepository };
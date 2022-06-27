import { Model, DataTypes } from 'sequelize';
import { Database } from '../../database';

import {
    IChampionshipTeamDTO,
    IChampionshipTeamRecordDTO
} from '../dto/ChampionshipTeamDTOs';

class ChampionshipTeam extends Model<IChampionshipTeamRecordDTO, IChampionshipTeamDTO> { };

ChampionshipTeam.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    championshipId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Championships',
            key: 'id'
        },
    },
    teamId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        }
    }
}, {
    sequelize: Database,
    updatedAt: false,
    createdAt: false,
    modelName: 'Championshipteam',
    tableName: 'Championship_teams',
});

export { ChampionshipTeam };
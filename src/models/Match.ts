import { Model, DataTypes } from 'sequelize';
import { Database } from '../../database';

import { IMatchRecordDTO, IMatchDTO } from '../dto/MatchDTOs';

class Match extends Model<IMatchRecordDTO, IMatchDTO> { };

Match.init({
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
        }
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    team1Id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        }
    },
    team1Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    team2Id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        }
    },
    team2Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    teamWinnerId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        }
    },
}, {
    sequelize: Database,
    updatedAt: false,
    createdAt: false,
    modelName: 'Match'
});

export { Match };
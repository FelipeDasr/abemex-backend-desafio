import { Model, DataTypes } from 'sequelize';
import { Database } from '../../database';

import { ITeamDTO, ITeamRecordDTO } from '../dto/TeamDTOs';

class Team extends Model<ITeamRecordDTO, ITeamDTO> { };

Team.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    playersInitials: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    sequelize: Database,
    modelName: 'Team',
    updatedAt: false,
    paranoid: true, // Soft delete
});

export { Team };
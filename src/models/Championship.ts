import { Model, DataTypes } from 'sequelize';
import { Database } from '../../database';

import { 
    IChampionshipDTO, 
    IChampionshipRecordDTO 
} from '../dto/ChampionshipDTOs';

class Championship extends Model<IChampionshipRecordDTO, IChampionshipDTO> { };

Championship.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        onDelete: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    levels: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    award: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    closed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    teamWinnerId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        references: {
            model: 'Teams',
            key: 'id'
        }
    },
}, {
    sequelize: Database,
    modelName: 'Championship',
    updatedAt: false
});

export { Championship };
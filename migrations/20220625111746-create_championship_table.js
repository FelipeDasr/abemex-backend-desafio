module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        queryInterface.createTable('Championships', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                onDelete: 'CASCADE'
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(500),
                allowNull: false,
            },
            levels: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            award: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            closed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            teamWinnerId: {
                type: Sequelize.UUID,
                defaultValue: null,
                allowNull: true,
                references: {
                    model: 'Teams',
                    id: 'id'
                },
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.dropTable('Championships');
    }
};
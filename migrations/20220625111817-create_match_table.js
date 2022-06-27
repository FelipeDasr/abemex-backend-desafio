module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        queryInterface.createTable('Matches', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            championshipId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Championships',
                    key: 'id'
                }
            },
            level: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            team1Id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Teams',
                    key: 'id'
                }
            },
            team1Score: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            team2Id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Teams',
                    key: 'id'
                }
            },
            team2Score: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            teamWinnerId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Teams',
                    key: 'id'
                }
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
        queryInterface.dropTable('Matches');
    }
};
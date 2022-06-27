'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        queryInterface.createTable('Championship_teams', {
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
            teamId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Teams',
                    key: 'id'
                }
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.dropTable('Championship_teams');
    }
};
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            avtar: {
                type: DataTypes.STRING,
            },
            tags: {
                type: DataTypes.TEXT,
            },
            social: {
                github: {
                    type: DataTypes.STRING,
                },
                stackoverflow: {
                    type: DataTypes.STRING,
                },
                linkedin: {
                    type: DataTypes.STRING,
                },
                instagram: {
                    type: DataTypes.STRING,
                },
                twitter: {
                    type: DataTypes.STRING,
                },
                facebook: {
                    type: DataTypes.STRING,
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};
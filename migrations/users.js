"use strict";
const { Sequelize } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up({ context: queryInterface }) {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			balance: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		await queryInterface.bulkInsert("users", [
			{
				balance: 10000,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},
	async down(queryInterface) {
		await queryInterface.dropTable("users");
	},
};

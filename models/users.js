"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate() {}
	}
	Users.init(
		{
			balance: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			underscored: true,
			tableName: "users",
			modelName: "Users",
		}
	);
	return Users;
};

const { Users, sequelize } = require("../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res) => {
	var limit = req.query.limit || 25;
	var offset = req.query.offset || 1;
	where = {};

	const users = await Users.findAll({
		where,
		order: [["id", "desc"]],
		limit: limit,
		offset: (offset - 1) * limit || 0,
	});

	return res.status(200).send(users);
});

exports.getUser = catchAsync(async (req, res, next) => {
	const user = await Users.findOne({ where: { id: req.params.id } });
	if (!user) return next(new AppError("Not found", 404));

	return res.status(200).send(user);
});

exports.editUser = catchAsync(async (req, res, next) => {
	const transaction = await sequelize.transaction();

	const user = await Users.findOne({
		where: { id: req.params.id },
		lock: transaction.LOCK.UPDATE,
		transaction,
	});
	var amount = parseInt(req.body.amount);

	if (!user) {
		await transaction.rollback();
		return next(new AppError("Not found", 404));
	}

	if (amount) {
		if (user.balance + amount < 0) {
			await transaction.rollback();
			return next(new AppError("Not enough balance", 400));
		}

		user.balance += amount;
		await user.update({ balance: user.balance }, { transaction });
		await transaction.commit();
	}

	return res.status(200).send(user);
});

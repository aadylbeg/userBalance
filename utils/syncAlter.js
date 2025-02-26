const { sequelize } = require("../models");

(async () => {
	try {
		await sequelize.sync({ alter: true });
		console.log("Model Synced");
	} catch (err) {
		console.log(err);
	}
	process.exit(1);
})();

const sendError = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
	});
};

const sqlError = (err) => {
	// const errors = Object.values(err.errors).map(el => el.message);
	const message = err.original;
	return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";

	console.log(err);
	sendError(err, res);
};

// const AppError = require('./../utils/appError');

// const handleDuplicateFieldsDB = err => {
//     const value = err.errors[0].value;
//     const message = `Duplicate field value: ${value}. Please use another value`;

//     return new AppError(message, 400);
// }

// const handleCastErrorDB = err => {
//     const message = `Invalid ${err.path}: ${err.value}.`
//     return new AppError(message, 400);
// }

// const handleValidationErrorDB = err => {
//     const errors = Object.values(err.errors).map(el => el.message);
//     const message = `Invalid input data. ${errors.join('. ')}`;
//     return new AppError(message, 400);
// }

// const handleJWTRrror = () => new AppError('Invalid token. Please log in again', 401)

// const handleJWTEnspiredError = () => new AppError('Your token has expired. Please log in again', 401);

// const sendErrorDev = (err, res) => {
//     res.status(err.statusCode).json({
//         status: err.status,
//         error: err,
//         message: err.message,
//         stack: err.stack
//     });
// }

// const sendErrorProd = (err, res) => {
//     // Operational, trusted error: send message to client
//     if (err.isOperational) {
//         res.status(err.statusCode).json({
//             status: err.status,
//             message: err.message
//         });

//         // Programming or other unknown error: don't leak error details
//     } else {
//         // 1) Log error
//         console.error('ERROR 💣', err);
//         console.log('ERRRRR', err.name);

//         // 2) Send generic message
//         res.status(500).json({
//             status: 'error',
//             message: 'Something went very wrooong'
//         });
//     }
// }

// module.exports = (err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error';

//     if (process.env.NODE_ENV === 'development') {
//         sendErrorDev(err, res);
//     } else { //if (process.env.NODE_ENV === 'production')
//         let error;

//         if (err.name === 'CastError') error = handleCastErrorDB(err);
//         if (err.name === 'SequelizeUniqueConstraintError') error = handleDuplicateFieldsDB(err);
//         if (err.name === 'SequelizeValidationError') error = handleValidationErrorDB(err);
//         if (err.name === 'JsonWebTokenError') error = handleJWTRrror();
//         if (err.name === 'TokenExpiredError') error = handleJWTEnspiredError();

//         sendErrorProd(error || err, res);
//     }
// }
// // let error;
// // if (err.name === 'CastError') error = handleCastErrorDB(err);

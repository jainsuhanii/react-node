const CustomError = require("../helper/customError")
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require("../helper/responseCodes")
const orderService = require("../services/order-service")
exports.getAllOrders = async (req, res, next) => {
    try {
        const options = {
            pagination: {
                page: parseInt(req.query.page) || 1,
                limit: parseInt(req.query.limit) || 10
            },
            filters: {},
            search: req.query.search || '',
            sortColumn: req.query.sortColumn,
            sortDirection: req.query.sortDirection
        };

        if (req.query.id) {
            options.filters.id = parseInt(req.query.id);
        }

        const result = await orderService.getAll(options);
        return res.status(RESPONSE_CODES.SUCCESS).json(result);
    } catch (error) {
        next(error);
    }
};

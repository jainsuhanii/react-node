const CustomError = require('../helper/customError');
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require('../helper/responseCodes');
const db = require('../db');
const{ paginationObject } = require('../helper/app-helper');

const orderService = {};
orderService.getAll = async (options = {}) => {
    try {
        const {
            pagination = paginationObject,
            filters = {},
            search = '',
            sortColumn = 'id',
            sortDirection = 'DESC'
        } = options;

        const offset = (pagination.page - 1) * pagination.limit;
        

        let query = `
            SELECT 
                SQL_CALC_FOUND_ROWS *
            FROM order_item_splits
        `;

        const params = [];
        
        // Add search conditions if present
        if (search) {
            query += ' WHERE (id LIKE ? OR order_name LIKE ? OR shopify_order_id LIKE ? OR middleware_status LIKE ?)';
            params.push(
                `%${search}%`,
                `%${search}%`,
                `%${search}%`,
                `%${search}%`
            );
        }

        // Add ID filter if provided
        if (filters.id) {
            const idClause = search ? ' AND id = ?' : ' WHERE id = ?';
            query += idClause;
            params.push(parseInt(filters.id));
        }

        // Add sorting
        const allowedColumns = ['id', 'middleware_status', 'order_name', 'shopify_order_id'];
        const validSortColumn = allowedColumns.includes(sortColumn) ? sortColumn : 'id';
        const validSortDirection = sortDirection.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
        
        query += ` ORDER BY ${validSortColumn} ${validSortDirection}`;
        
        // Add pagination using direct values instead of parameters
        query += ` LIMIT ${parseInt(pagination.limit)} OFFSET ${parseInt(offset)}`;

        // Execute main query
        const [rows] = await db.promise().execute(query, params);
        
        // Get total count
        const [countRows] = await db.promise().execute('SELECT FOUND_ROWS() as total');
        
        const totalRecords = countRows[0].total;
        const totalPages = Math.ceil(totalRecords / pagination.limit);

        return {
            success: true,
            data: rows || [],
            pagination: {
                currentPage: Number(pagination.page),
                totalPages,
                totalRecords,
                recordsPerPage: Number(pagination.limit)
            }
        };

    } catch (error) {
        console.error('Error fetching orders:', error);
        throw new CustomError(
            RESPONSE_CODES.SERVER_ERROR, 
            "Error fetching orders: " + error.message
        );
    }
};


module.exports = orderService;
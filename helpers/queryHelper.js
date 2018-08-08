
async function queryHelper(entityName, req, customOptions = {}, customQuery={}) {

        const CurrentEntity = require(`../models/${entityName}`);

        const reqParams = req.query;

        const query = {
            ...customQuery
        };

        const options = {
            ...customOptions
        };

        if (!reqParams.sort) {
            options.sort = { date: -1 }
        } else {
            options.sort = JSON.parse(reqParams.sort)
        }

        if (reqParams.offset) {
            options.offset = parseInt(reqParams.offset);
        }

        if (reqParams.limit) {
            options.limit = parseInt(reqParams.limit);
        }

        return CurrentEntity.paginate(query, options);

};

module.exports = queryHelper;
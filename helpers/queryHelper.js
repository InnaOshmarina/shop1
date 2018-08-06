async function queryHelper(entityName, req, customOptions = {}) {

        const CurrentEntity = require(`../models/${entityName}`);

        const reqParams = req.query;

        const query   = {};
        const options = {
            ...customOptions,
            sort:     { date: -1 }
        };

        if (reqParams.offset) {
            options.offset = parseInt(reqParams.offset);
        }

        if (reqParams.limit) {
            options.limit = parseInt(reqParams.limit);
        }

        return CurrentEntity.paginate(query, options);

};

module.exports = queryHelper;
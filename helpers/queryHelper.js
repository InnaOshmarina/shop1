async function queryHelper(entityName, req, res) {


        const CurrentEntity = require(`../models/${entityName}`);

        const reqParams = req.query;

        const query   = {};
        const options = {
            sort:     { date: -1 }
        };

        if (reqParams.offset && reqParams.limit) {
            const offset = parseInt(reqParams.offset);
            const limit = parseInt(reqParams.limit);
            options.offset = offset * limit;
        }

        if (reqParams.limit) {
            options.limit = parseInt(reqParams.limit);
        }

        return CurrentEntity.paginate(query, options);

};

module.exports = queryHelper;
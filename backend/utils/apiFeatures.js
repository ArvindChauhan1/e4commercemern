class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {  //for searching pattern
                $regex: this.queryStr.keyword, //$regex is mongodb operator
                $options: "i",  //case insensitive
            }
        } : {}

        this.query = this.query.find(keyword);
        return this;
    }
}

module.exports = ApiFeatures
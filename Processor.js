class Processor {
    static process(data){
        var parts = data.split("\r\n");
        var rows = []
        parts.forEach(row => {
            rows.push(row.split(","))
        })
        return rows
    }
}

module.exports = Processor

const fs = require('fs');

let data = [];

module.exports = {
    init() {
        try {
            const fileContents = fs.readFileSync(fileName);
            data = JSON.parse(fileContents)
        } catch (e) {
            data = []
        }
    },

    getItems() {
        return data
    },

    addItem(item) {
        data.push(item);
        this.save()
    },

    save() {
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
};

const fs = require('fs');
const datetime = new Date("2015-03-25T12:00:00Z");

const fileName = datetime;

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

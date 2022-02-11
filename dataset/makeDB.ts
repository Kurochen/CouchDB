const fs = require('fs')
const nano = require('nano')('http://admin:0000@localhost:5984');

const data = fs.readFileSync("dataset/generated.json")
const JSparse = JSON.parse(data)

export default (db: String) => {
    const alice = nano.use(db);
    JSparse.forEach((item: any) => {
        alice.insert(item)
    })
}



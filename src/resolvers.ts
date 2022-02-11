const nano = require('nano')('http://admin:0000@localhost:5984');
const alice = nano.db.use('alice');

export default {
    findSingle: async ({ id }: { id: String }) => {
        const file = await alice.get(id);
        const books = await alice.find({
            selector: { author: { "$eq": file.author } },
            fields: ['book'],
            limit: 5,
        });
        const result = {
            author: file.author,
            book: file.book,
            books: books.docs
        }
        return result;

    },

    findAll: async ({ bookmark }: { bookmark: String }) => {
        const files = await alice.find({
            selector: {},
            fields: ['book', 'author'],
            limit: 5,
            bookmark: bookmark
        });
        const result = { docs: files.docs, bookmark: files.bookmark }
        return result
    },
};


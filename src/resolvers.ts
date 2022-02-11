const nano = require('nano')('http://admin:0000@localhost:5984');
const alice = nano.db.use('alice');

export default {
    findSingle: async ({ id }: { id: String }) => {
        const file = await alice.get(id);
        const books = await alice.find({
            selector: { author: { "$eq": file.author } },
            fields: ['book', 'author'],
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







// const nano = require('nano')('http://admin:0000@localhost:5984');
// const alice = nano.db.use('alice');

// export default {
//     findSingle: async ({ id }: { id: String }) => {
//         const file = await alice.get(id);
//         console.log(file);
//         return file;
//     },

//     findAll: async ({ bookmark }: { bookmark: String }) => {
//         const files = await alice.find({
//             selector: {},
//             fields: ['book', 'author'],
//             limit: 5,
//             bookmark: bookmark
//         });
//         const result = { docs: files.docs, bookmark: files.bookmark }
//         return result
//     },


//     findAuthor: async ({ author }: { author: String }) => {
//         const files = await alice.find({
//             selector: { author: { "$eq": author } },
//             fields: ['book', 'author'],
//             limit: 5,
//         });
//         console.log(files.docs)
//         //const result = { author: author, books: files.docs.book }
//         return files.docs
//     },

//     hello: () => {
//         return 'Hello world!';
//     },



//     hello2: ({ arg }: { arg: String }) => {
//         let ar1 = arg
//         let ar2 = arg
//         const result = { ar1: arg, ar2: arg }
//         return result
//     }
// };
import { buildSchema } from "graphql";

export default buildSchema(`
  type Book {
    book: String!
    author: String!
}
   type Doc {
    book: String!
    author: String!
    books:[Book]
},
  type Docs {
    docs: [Doc],
    bookmark: String
}
  type Query {
    findSingle(id: String!): Doc!,
    findAll(bookmark: String): Docs,
}
`);


import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";
console.log("hello");

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graph QL server Running"));
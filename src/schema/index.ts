import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_EVENTS } from "./queries/Event.js";
import { CREATE_EVENT } from "./mutations/Event.js";

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        getAllEvents: GET_ALL_EVENTS,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createEvent: CREATE_EVENT,
    },
});

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
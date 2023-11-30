import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";

export const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        duration: { type: GraphQLString },
        description: { type: GraphQLString },
        guests: { type: new GraphQLList(GraphQLString) },
    }),
});
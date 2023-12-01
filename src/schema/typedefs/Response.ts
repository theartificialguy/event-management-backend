import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLBoolean } from "graphql";

export const ResponseType = new GraphQLObjectType({
    name: "Response",
    fields: () => ({
        successful: { type: GraphQLBoolean },
        message: { type: GraphQLString },
    }),
});
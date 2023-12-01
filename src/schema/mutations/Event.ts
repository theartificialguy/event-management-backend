import { GraphQLList, GraphQLString } from "graphql";
import { ResponseType } from "../typedefs/index.js";
import Event from "../../models/event.model.js";

export const CREATE_EVENT = {
    type: ResponseType,
    args: {
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        duration: { type: GraphQLString },
        description: { type: GraphQLString },
        guests: { type: new GraphQLList(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
        const { name, date, time, duration, description, guests } = args;
        try {
            await Event.create({ name, date, time, duration, description, guests });
            return {
                successful: true,
                message: "successfully created an event",
            };
        } catch (error) {
            throw new Error("something went wrong");
        }
    },
};
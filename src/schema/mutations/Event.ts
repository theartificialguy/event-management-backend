import { GraphQLList, GraphQLString } from "graphql";
import { EventType } from "../typedefs/Event.js";
import Event from "../../models/event.model.js";

export const CREATE_EVENT = {
    type: EventType,
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
        await Event.create({ name, date, time, duration, description, guests });
        return args;
    },
};
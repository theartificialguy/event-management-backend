import { GraphQLList } from "graphql";
import { EventType } from "../typedefs/Event.js";
import Event from "../../models/event.model.js";

export const GET_ALL_EVENTS = {
    type: new GraphQLList(EventType),
    async resolve() {
        return await Event.find({});
    },
};
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    guests: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
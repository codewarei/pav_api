const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const AnswerSchema = new Schema (
    {
        answer1: {
            type: String,

        },
        answer2: {
            type: String,

        },
        answer3: {
            type: String,

        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

    },
    { timestamps: true }
);

AnswerSchema.plugin(uniqueValidator);
module.exports = model("Answer", AnswerSchema);
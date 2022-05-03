const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const QuestionSchema = new Schema (
    {
        question1: {
            type: String,

        },
        question2: {
            type: String,

        },
        question3: {
            type: String,

        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

    },
    { timestamps: true }
);

QuestionSchema.plugin(uniqueValidator);
module.exports = model("Question", QuestionSchema);
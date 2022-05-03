const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const QuestionnaireSchema = new Schema (
    {
        place: {
            type: String,

        },
        children: {
            type: String,

        },
        interests: {
            type: String,

        },
        weekends: {
            type: String,

        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

    },
    { timestamps: true }
);

QuestionnaireSchema.plugin(uniqueValidator);
module.exports = model("Questionnaire", QuestionnaireSchema);
const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Agriculture",
        "Business",
        "Crypto",
        "Education",
        "Entertainment",
        "Art",
        "Investment",
        "weather",
        "uncategorized",
      ],
      message: "{VALUE is not supported}",
    },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);

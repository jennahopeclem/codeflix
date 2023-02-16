const { Schema, model } = require("mongoose");
const endorsementSchema = require("./Endorsement");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min_length: 8,
    max_length: 20,
  },
  about: {
    type: String,
    default: "",
    max_length: 500,
  },
  profile_pic: {
    type: String,
    // default: this will be a default avatar
  },
  specialty: {
    type: String,
  },
  endorsements: [endorsementSchema],
});

userSchema.virtual("rating").get(function () {
  let grossRating;
  for (endorsement in this.endorsements) {
    grossRating += endorsement.rating;
  }
  const rating = grossRating / this.endorsements.length;
  return rating;
});

const User = model("User", userSchema);

module.exports = User;

const { Schema, model } = require("mongoose");
const endorsementSchema = require("./Endorsement");
const bcrypt = require('bcrypt');


const userSchema = new Schema({
  username: {
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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

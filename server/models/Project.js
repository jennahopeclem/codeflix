const { Schema, model } = require("mongoose");

// schema for looking_for data
const recruitmentSchema = new Schema({
  is_looking: {
    type: Boolean,
    required: true,
  },
  num_recruits: {
    type: Number,
    default: 0,
  },
  specialty: {
    type: String,
    required: true,
    default: "Any",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});

// schema for projects
const projectSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    looking_for: [recruitmentSchema],
    users: [{                          // because we are referencing other schemas, we need to use .populate() method when finding looking_for and users
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }],
    complete: {
        type: Boolean,
        required: true,
    },
    thumbnail: {
      type: String,
      required: false,
      default: 'https://res.cloudinary.com/dijep6dqz/image/upload/v1676509317/Portfolio-assets/computer_z0o92j.png' // this will be a default thumbnail
    }
  });

  const Project = model('Project', projectSchema);
  
  module.exports = Project, recruitmentSchema;

const { Schema, model } = require('mongoose');

const recruitmentSchema = new Schema({
    is_looking: {
        type: Boolean,
        required: true
    },
    num_recruits: {
        type: Number,
        default: 0
    },
    specialty: {
        type: String,
        required: true,
        default: 'Any'
    }
});


const projectSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    looking_for: {recruitmentSchema},
    users: [{                          // because we are referencing other schemas, we need to use .populate() method when finding looking_for and users
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }],
    complete: {
        type: Boolean,
        required: true,
    }
  });

  const Project = model('Project', projectSchema);
  
  module.exports = Project;
const { Schema, model } = require('mongoose');

const endorsementSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    specialty: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    body: {
      type: String,
      required: true,
      min_length: 50,
      max_length: 280,
    }
});

module.exports = endorsementSchema;
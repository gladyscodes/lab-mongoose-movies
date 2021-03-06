const mongoose = require("mongoose");
const { Schema } = mongoose;

const celebritySchema = new Schema ( {
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  }
})

module.exports = mongoose.model("Celebrity", celebritySchema);
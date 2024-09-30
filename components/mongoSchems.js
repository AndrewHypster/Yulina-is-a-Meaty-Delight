const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: {
    type: {
      phone: {
        type: String,
        required: true,
      },
      telegram: {
        type: String,
      },
      mail: {
        type: String,
      },
    },
    required: true,
  },
  birthDay: {
    type: String,
  },
  isAutorise: {
    type: Boolean,
    required: true,
  },
});

export { userSchema };

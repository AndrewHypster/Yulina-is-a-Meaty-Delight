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

const productSchema = new Schema({
  kind: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  isTop: {
    type: Boolean,
    require: true,
  },
  reviews: [
    {
      userName: { type: String, required: true },
      userLastName: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 },
      comment: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
});

export { userSchema, productSchema };

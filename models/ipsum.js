const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ipsumSchema = new Schema({
  title: {type: String, required: true},
  url: {type:String, required: true},
  sample: {type: String, required: true},
  favorite: {type: Boolean, default: false },
  comment: {type: Schema.Types.ObjectId, ref: "Comment"}
});

const Ipsum = mongoose.model("Ipsum", ipsumSchema);

module.exports = Ipsum;

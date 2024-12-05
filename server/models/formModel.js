import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Schema.ObjectId,
      ref:"User"
    },
    categorize: {
      type: Object,
      required: true,
    },
    cloze: {
      type: Object,
      required: true,
    },
    comphrehension: {
      type: Object,
      required: true,
    },
    title: {
      required: true,
      type: String,
      default:"Untitled"
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);
export default Form;

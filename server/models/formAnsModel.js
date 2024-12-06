import mongoose from "mongoose";

const formAnsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    categorize: {
      type: Object,
      required: true,
    },
    cloze: {
      type: Object,
      required: true,
    },
    comphrehesion: {
      type: Object,
      required: true,
    },
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Form",
    },
  },
  { timestamps: true }
);

const FormAns = mongoose.model("FormAns", formAnsSchema);
export default FormAns;

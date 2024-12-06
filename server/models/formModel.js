import mongoose from "mongoose";
// {
  //   title: '',
  //   allCategorizeData: {
  //     question: 'dedsasa',
  //     options: [ 'ascaa' ],
  //     categories: [ 'dss', 'sdcdsc' ]
  //   },
  //   allClozeData: {
  //     paragraph: 'This is a sample sentence. You can underline words here.Ssa',
  //     options: [ 'sentence' ],
  //     questionLine: 'This is a sample _____. You can underline words here.'
  //   },
  //   allComphrehensionData: { passage: 'dsaadaada', subQuestions: [ [Object] ] }
  // }
const formSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
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

import Form from "../models/formModel.js";

export const createForm = async (req, res) => {
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

  try {
    const { title, allCategorizeData, allClozeData, allComphrehensionData } =
      req.body;

    const userId = req.user.id;
    if (!userId) {
      throw new Error("Please login first...❌");
    }

    if (!allCategorizeData) {
      throw new Error("Please fill categorize form...❌");
    }

    if (!allClozeData) {
      throw new Error("Please fill cloze form...❌");
    }

    if (!allComphrehensionData) {
      throw new Error("Please fill comphrehension form...❌");
    }

    let data = {
      userId,
      title,
      categorize: allCategorizeData,
      cloze: allClozeData,
      comphrehension: allComphrehensionData,
    };

    await Form.create(data);

    return res.status(201).json({
      success: true,
      error: false,
      message: "Form added successfully...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      success: false,
      message: error.message,
    });
  }
};

export const fetchFormData = async (req, res) => {
  try {
    const { id: formId } = req.params;

    if (!formId) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Form ID is required.",
      });
    }

    const data = await Form.findById(formId);

    if (!data) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Form not found.",
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      data,
    });
  } catch (error) {
    console.error("Error fetching form data:", error.message);
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error.",
    });
  }
};

export const fetchForm = async (req, res) => {
  try {
    const allForm = await Form.find().populate("userId", "username _id");

    return res.status(200).json({
      success: true,
      error: false,
      data: allForm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

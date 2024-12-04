import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    if (!username) {
      throw new Error("Please provide username🤦");
    }

    if (!email) {
      throw new Error("Please provide email🤦");
    }

    if (!password) {
      throw new Error("Please provide password🤦");
    }

    if (!phone) {
      throw new Error("Please provide phone number🤦");
    }

    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("User already exits🤦");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    if (!hashedPassword) {
      throw new Error("Something went wrong🤦");
    }

    const payload = {
      username,
      email,
      phone,
      password: hashedPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      success: true,
      error: false,
      message: "User created successfully..🎉🎉",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      throw new Error("Please provide email🤦");
    }

    if (!password) {
      throw new Error("Please provide password🤦");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found🤦");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw new Error("Please check password🤦");
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    const tokenOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    const userData = {
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };

    return res.cookie("token", token, tokenOption).status(200).json({
      data: userData,
      message: "LoggedIn successfully...🎉",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { expiresIn: 0 }).status(200).json({
      data: userData,
      message: "Logged out successfully...✅",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
};

import User from "../model/userModel.js";

export const createNewUser = async (req, res) => {
  const { name, email, address } = req.body;
  if (!name || !email || !address)
    return res.status(400).json({ message: "missing required fields" });

  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User already exist" });

  try {
    await User.create({
      name,
      email,
      address,
    });
    res.status(200).json({ message: "New user created" });
  } catch (error) {
    console.log({ errorMessage: error.message });
  }
};

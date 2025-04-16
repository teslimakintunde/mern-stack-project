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

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers || allUsers.length === 0)
      return res.status(404).json({ message: "User data Not Found" });
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

import User from "../models/userModel.js"

export const getUsersForSideBar = async (req, res) => {
  try {
    
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(allUsers)

  } catch (err) {
    console.log("Error in getUsersForSideBar: ", err.message);
    res.status(500).json({ erroe: "Internal Server Error."})
  }
}
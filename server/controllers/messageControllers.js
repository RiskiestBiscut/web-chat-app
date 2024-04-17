import { json } from "express"

export const sendMessage = async (req, res) => {
  try {
    const {message} = req.body;
    const {id} = req.params;
    const senderId =

  } catch (err) {
    console.log("Error in sendMessage controller", err.message);
    res.status(500).json({ error: "Internal Server Error."})
  }
}
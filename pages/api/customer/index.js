import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in connecting to DB" });
    return;
  }

  if (req.method == "POST") {
    console.log(req.body);
    const  data  = req.body;
    if (!data.name || !data.lastName || !data.email) {
      return res.status(400).json({ message: "Invalid Data" });
    }
    try {
      const response = await Customer.create(data);
      res.status(201).json({ message: "created", data: response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Intenal Server Error" });
    }
  }
}

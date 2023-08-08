import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(err.message);
    res.status(500).json({
      status: "failed",
      message: "Error in deleting data from database",
    });
  }
  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      res.status(200).json({ status: "success", data: customer });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "error in deleting data from database",
      });
    }
  }
}

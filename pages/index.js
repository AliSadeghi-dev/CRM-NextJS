import connectDB from "../utils/connectDB";
import Customer from "../models/Customer";
import HomePage from "../components/template/HomePage";

export default function Home({ customers }) {
  console.log(customers);
  return <HomePage customers={customers} />;
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const data = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

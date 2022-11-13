import Product from "./Schema/productSchema.js";
import { products } from "./DefaultData/ProductsData.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;

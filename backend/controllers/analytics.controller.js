import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const getAnalyticsData = async() => {
   const totalUsers = await User.countDocuments();
   const totalProducts = await Product.countDocuments();

   const salesData = await Order.aggregate([
      {
         $group: {
            _id: null, // groups all documents together
            totalSales
         }
      }
   ])
}
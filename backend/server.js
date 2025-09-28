import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoute from "./routes/cart.route.js";
import couponsRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoute);
app.use("/api/coupons", couponsRoutes);
app.use("/api/payments", paymentRoutes);

// Connect to DB first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);
  });
});

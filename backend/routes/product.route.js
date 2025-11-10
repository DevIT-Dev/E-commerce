import express from "express";
import {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getrecommendedProducts,
  toggleFeaturedProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getrecommendedProducts);
// Create a new product (admin only)
router.post("/", protectRoute, adminRoute, createProduct);
// Toggle featured status for a product (admin only)
router.post(
  "/:id/toggle-featured",
  protectRoute,
  adminRoute,
  toggleFeaturedProduct
);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;

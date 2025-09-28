import express, { Router } from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { getAnalyticsData } from "../controllers/analytics.controller.js";

const router = express.Router()

router.get("/", protectRoute, adminRoute, async(req,res) =>{
   try {
      const getAnalyticsData  = await getAnalyticsData();
   } catch (error) {
      
   }
})
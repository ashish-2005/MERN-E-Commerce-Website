import express from "express";

import {
    addToCart,
    removeItem,
    updateQuantity,
    getCart
} from "../controllers/cartController.js";

console.log("cart routes loaded");

const router = express.Router();

// Add item
router.post("/add", addToCart);

// Remove item
router.post("/remove", removeItem);

// Update quantity
router.post("/update", updateQuantity);

// Get cart
router.get("/:userId", getCart);

export default router;
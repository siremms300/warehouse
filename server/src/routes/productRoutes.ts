import { Router } from "express";
import { createProduct, getProducts, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);

export default router;

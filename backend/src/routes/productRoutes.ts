// src/routes/productRoutes.ts
import express from 'express';
import { getProducts } from '../controllers/productController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', getProducts);
// Add routes for create, update, delete

export default router;

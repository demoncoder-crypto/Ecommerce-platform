// src/controllers/productController.ts
import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

// Create, Read, Update, Delete functions

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Similar functions for getProductById, createProduct, updateProduct, deleteProduct

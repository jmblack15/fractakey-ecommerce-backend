import { Router } from 'express';
import { ProductsController } from '../controller/products.controller.js';

const ProductsRouter = () => {
    const router = Router();
    const productsController = ProductsController();

    router.get("/", productsController.getAllProducts);
    router.get("/:id", productsController.getProductById);

    return router;
}

export { ProductsRouter };
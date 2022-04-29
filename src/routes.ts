import { Router } from 'express';
import ProductController from './controllers/ProductController'
const router = Router();

router.post("/products/populate", ProductController.populate);
router.post("/products", ProductController.create);
router.get("/products", ProductController.all);
router.get("/products/:id", ProductController.show);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

export { router }
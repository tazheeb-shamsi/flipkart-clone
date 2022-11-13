import express from "express";

//! Components
import { userSignUp, userLogin } from "../controllers/userController.js";
import { getProducts , getProductById} from "../controllers/productController.js";
import { addPaymentGateway , paymentResponse} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.post("/payment", addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;

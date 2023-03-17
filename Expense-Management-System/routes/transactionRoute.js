import express from "express";
import {
  addTransaction,
  getAllTransaction,
} from "../controllers/transactionCtrller.js";

// router object
const router = express.Router();

// routes

// add transaction
router.post("/add-transaction", addTransaction);

// get transaction
router.post("/get-transaction", getAllTransaction);

export default router;

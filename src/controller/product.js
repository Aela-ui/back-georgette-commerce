import { Router } from "express";
import { listProducts, createProduct } from "../service/product.js";

const router = Router()

router.get('/', async (req, res) => {
    try {
        const productList = await listProducts()
        res.status(200).json({
            message: "produtos retornados com sucesso",
            payload: productList
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            payload: null
        })
    } 
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const product = await createProduct(req.body)
        res.status(201).json({
            message: "produto criado com sucesso",
            payload: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            payload: null
        })
    } 
})

export default router
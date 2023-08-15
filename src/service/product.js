import Product from "../db/models/product.js"

export const listProducts = async () => {
    const products = await Product.find()
    return products
}

export const createProduct = async (product) => {
    const createdProduct = await Product.create(product)
    return createdProduct
}
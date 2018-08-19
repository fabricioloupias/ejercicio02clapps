const productsModel = require('../models/products')
const productController = {};


productController.getProducts = async (req, res) => {
    const products = await productsModel.find();
    res.json(products)
}

productController.addProduct = async (req, res) => {
   const product = new productsModel(req.body)
   await product.save();
   res.json({
    message: 'Producto guardado'
})
}

productController.getProduct = async (req, res) => {
    const product = await productsModel.findById(req.params.id)
    res.json(product)
}

productController.editProduct = async (req, res) => {
    const { id } = req.params;
    const product = {
        name: req.body.name,
        description: req.body.description,
        precio: req.body.precio,
        stock: req.body.stock
    }
    await productsModel.findByIdAndUpdate(id, {$set: product}, {new:true});
    res.json({
        message: 'Producto actualizado'
    })
}

productController.deleteProduct = async (req, res) =>{
    const { id } = req.params;
    await productsModel.findByIdAndRemove(id)
    res.json({
        message: 'Producto eliminado'
    })
}

module.exports = productController;
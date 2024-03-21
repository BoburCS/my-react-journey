const products = require("../data/products/products.json");

exports.getProducts = (req, res) => {
    res.json({ products });
}

exports.getProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === +id);

    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
}

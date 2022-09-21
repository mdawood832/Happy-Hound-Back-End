const db = require('../models');

const index = (req, res) => {
  db.Product.find({}, (error, holidays) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      products,
      requestedAt: new Date().toLocaleString()
    });
  });
};

const create = (req, res) => {
  db.Product.create(req.body, (error, createdProduct) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      createdProduct,
      createdAt: new Date().toLocaleString(),
    }); 
  });
};

const update = (req, res) => {
  db.product.findByIdAndUpdate(
    req.params.id, 
    {
      $set: req.body
    }, 
    { new: true }, 
    (error, updatedProduct) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(updatedProduct)
  });
};

const destroy = (req, res) => {
  db.Product.findByIdAndDelete(req.params.id, (error, deletedProduct) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `Product ${deletedProduct.name} deleted successfully`
    });
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
}
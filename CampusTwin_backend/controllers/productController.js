const asyncHandler = require("../utils/asyncHandler");
const Product = require("../models/Product");

// POST /api/products
const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price, category, image } = req.body;
  if (!title || price === undefined) {
    return res.status(400).json({ message: "title and price are required" });
  }
  const product = await Product.create({
    title, description, price, category, image, seller: req.user._id,
  });
  res.status(201).json(product);
});

// GET /api/products?search=&category=
const getProducts = asyncHandler(async (req, res) => {
  const { search, category } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (search) filter.$text = { $search: search };

  const products = await Product.find(filter).populate("seller", "name email department").sort({ createdAt: -1 });
  res.json(products);
});

// GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("seller", "name email");
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// PUT /api/products/:id  (owner only)
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (String(product.seller) !== String(req.user._id)) {
    return res.status(403).json({ message: "Not your listing" });
  }

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// DELETE /api/products/:id  (owner only)
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (String(product.seller) !== String(req.user._id)) {
    return res.status(403).json({ message: "Not your listing" });
  }

  await product.deleteOne();
  res.json({ success: true });
});

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };

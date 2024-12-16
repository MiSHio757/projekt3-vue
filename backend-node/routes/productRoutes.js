app.get("/api/products", async (req, res) => {
  const { name, brand, type, strength, minPrice, maxPrice } = req.query;

  const filters = {};
  if (name) filters.name = { $regex: name, $options: "i" }; // Case-insensitive search
  if (brand) filters.brand = brand;
  if (type) filters.type = type;
  if (strength) filters.strength = strength;
  if (minPrice) filters.price = { ...filters.price, $gte: +minPrice };
  if (maxPrice) filters.price = { ...filters.price, $lte: +maxPrice };

  try {
    const products = await Product.find(filters);
    res.json(products);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

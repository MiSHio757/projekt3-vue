const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  type: String,
  strength: String,
  price: Number,
  flavor: String,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema);

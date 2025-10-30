import express from "express";
// import { ProductsRouter } from './routes/products.route.js';
import { UserRouter } from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use('/products', ProductsRouter());
app.use("/users", UserRouter());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

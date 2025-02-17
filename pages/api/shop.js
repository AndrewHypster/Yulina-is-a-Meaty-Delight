const { default: mongoose } = require("mongoose");
import { productSchema } from "@/pages/api/mongoSchems";

const db = process.env.SHOP_DB;

export default async function Users(req, res) {
  try {
    // Чекаємо на підключення до бази даних
    await mongoose.connect(db);
    console.log("Connected to Shop DB");

    const Product =
      mongoose.models.product || mongoose.model("product", productSchema);

    if (req.method === "POST") {
      // C R E A T E   N E W   P R O D U C T
      if (req.query.work === "create") {
        const { kind, name, cost, description, photoUrl, isTop, reviews } =
          req.body;

        const product = new Product({
          kind,
          name,
          cost,
          description,
          photoUrl,
          isTop,
          reviews,
        });

        product
          .save()
          .then((result) => res.send("Успішно зареєстровано!"))
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            mongoose.connection.close();
            console.log("Close Product DB");
          });
      }

      // G E T   P R O D U C T S
      if (req.query.work === "get-products") {
        try {
          // Отримати номер сторінки з запиту (за замовчуванням 1)
          console.log(req.body);
          const page = +req.body.page || 1;
          const limit = req.body.limit; // товарів на сторінку
          const skip = (page - 1) * limit;
          const filter = req.body.filter;

          // Отримати товари з MongoDB
          let products;
          filter
            ? (products = await Product.find(filter))
            : (products = await Product.find({}).skip(skip).limit(limit));

          res.status(200).json({ products: products });
        } catch (e) {
          console.error(e);
          res.status(500).json({ message: "Something went wrong" });
        } finally {
          mongoose.connection.close();
          console.log("Close Product DB");
        }
      }

      // G E T   P R O D U C T
      if (req.query.work === "get-product") {
        try {
          console.log(req.body.id);
          const productID = req.body.id;
          const product = await Product.findOne({ _id: productID });
          res.status(200).json(product);
        } catch (e) {
          console.error(e);
          res.status(500).json({ message: productID });
        } finally {
          mongoose.connection.close();
          console.log("Close Product DB");
        }
      }
    }
  } catch (error) {
    console.error("Error connecting to Shop DB:", error);
    mongoose.connection.close();
    console.log("Close Product DB");
  }
}

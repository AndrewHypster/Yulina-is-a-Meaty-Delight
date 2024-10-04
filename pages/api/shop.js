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
      // if (req.query.work === "create") {
      //   const { kind, name, cost, description, photoUrl, isTop, reviews } = req.body;

      //   const product = new Product({
      //     kind,
      //     name,
      //     cost,
      //     description,
      //     photoUrl,
      //     isTop,
      //     reviews
      //   });

      //   product
      //     .save()
      //     .then((result) => res.send("Успішно зареєстровано!"))
      //     .catch((error) => {
      //       console.log(error);
      //     })
      //     .finally(() => {
      //       mongoose.connection.close();
      //       console.log("Close Product DB");
      //     });
      // }

      // G E T   P R O D U C T
      if (req.query.work === "get-products") {
        const { productID } = req.body;
        if (productID) {
          const finded = await Product.findOne({
            _id: productID,
          });
          res.send(finded);
        }
        mongoose.connection.close();
        console.log("Close Product DB");
      }
    }
  } catch (error) {
    console.error("Error connecting to Shop DB:", error);
    mongoose.connection.close();
    console.log("Close Product DB");
  }
}

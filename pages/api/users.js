const { default: mongoose } = require("mongoose");
import { userSchema } from "@/pages/api/mongoSchems";

const db = process.env.USER_DB;

export default async function Users(req, res) {
  try {
    // Чекаємо на підключення до бази даних
    await mongoose.connect(db);
    console.log("Connected to User DB");

    const User = mongoose.models.user || mongoose.model("user", userSchema);

    if (req.method === "POST") {
      // C R E A T E   N E W   U S E R
      if (req.query.work === "create") {
        const { name, lastName, password, contacts } = req.body;

        const finded = await User.findOne({
          "contacts.phone": contacts.phone,
        });

        if (finded) {
          console.log("User found:", finded);
          res.send("Користувач з таким телефоном вже існує");
        } else {
          const user = new User({
            name,
            lastName,
            password,
            contacts,
            basket: [],
          });

          user
            .save()
            .then((result) => res.send(result))
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              mongoose.connection.close();
              console.log("Close User DB create new user");
            });
        }
      }

      // C H A N G E   U S E R
      else if (req.query.work === "change") {
        const { id, updateData } = req.body;
        async function updateUser() {
          try {
            console.log(updateData);
            const updatedDoc = await User.findByIdAndUpdate(id, updateData, {
              new: true,
            });
            console.log("Оновлений документ:", updatedDoc);
          } catch (err) {
            console.error("Помилка при оновленні:", err);
          } finally {
            await mongoose.connection.close();
            console.log("Close User DB change user");
          }
        }
        updateUser();
      }

      // G E T   U S E R
      else if (req.query.work === "get-user") {
        const { userID } = req.body;
        if (userID) {
          console.log(userID);
          const finded = await User.findOne({
            _id: userID,
          });
          res.send(finded);
        }
        await mongoose.connection.close();
        console.log("Close User DB get user");
      }

      // A U T H O R I S E   U S E R
      else if (req.query.work === "authorise") {
        const { phone, password } = req.body;
        console.log(phone, password);

        const finded = await User.findOne({
          "contacts.phone": phone,
        });
        console.log("finded", finded);
        const isCurrectUser = finded ? finded.password == password : false;
        if (isCurrectUser) {
          async function updateUser() {
            try {
              const updatedDoc = await User.findByIdAndUpdate(
                finded["_id"],
                { isAutorise: true },
                {
                  new: true,
                }
              );
              res.send({
                message: "Користувача авторизовано",
                userInfo: finded,
              });
            } catch (err) {
              return res
                .status(400)
                .json({ error: `Помилка при авторизації: ${err}` });
            } finally {
              await mongoose.connection.close();
              console.log("Close User DB");
            }
          }
          updateUser();
        } else {
          await mongoose.connection.close();
          console.log("Close User DB");
          return res.status(400).json({ error: "Невірний логін чи пароль!" });
        }
      }

      // D E L E T E   U S E R
      else if (req.query.work === "delete") {
        const { id } = req.body;

        async function deleteUserById() {
          try {
            const deletedDoc = await User.findByIdAndDelete(id);
            if (deletedDoc) {
              console.log("Документ видалено:", deletedDoc);
            } else {
              console.log("Документ не знайдено");
            }
          } catch (err) {
            console.error("Помилка при видаленні:", err);
          } finally {
            await mongoose.connection.close();
            console.log("Close User DB");
          }
        }
        deleteUserById();
      }

      // A D D   B A S K E T
      else if (req.query.work === "add-basket") {
        const { userId, item } = req.body;
        async function addItemToBasket() {
          try {
            const result = await User.updateOne(
              { _id: userId }, // Знаходимо користувача за його ID
              { $push: { basket: item } } // Додаємо товар до масиву basket
            );
            res.send({
              message: "Успішно додано до кошика",
            });
          } catch (err) {
            return res
              .status(400)
              .json({ error: `Помилка при додаванні товру в кошик: ${err}` });
          } finally {
            await mongoose.connection.close();
            console.log("Close User DB add to basket");
          }
        }
        addItemToBasket();
      }

      // D E L E T E   B A S K E T
      else if (req.query.work === "delete-basket") {
        const { userId, _id } = req.body;
        async function deleteItemFromBasket() {
          try {
            const result = await User.updateOne(
              { _id: userId }, // Знаходимо користувача за його ID
              { $pull: { basket: { _id } } } // Видаляємо товар за його айді
            );
            res.send({
              message: "Успішно видалено з кошика",
            });
          } catch (err) {
            return res
              .status(400)
              .json({ error: `Помилка при видаленні товру з кошика: ${err}` });
          } finally {
            await mongoose.connection.close();
            console.log("Close User DB delete from basket");
          }
        }
        deleteItemFromBasket();
      }
    }
  } catch (error) {
    console.error("Error connecting to User DB:", error);
  }
}

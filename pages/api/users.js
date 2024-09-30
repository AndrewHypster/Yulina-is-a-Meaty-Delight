const { default: mongoose } = require("mongoose");
import { userSchema } from "@/components/mongoSchems";

const db =
  "mongodb+srv://Andrii:Monoliz_1503@yulina-is-a-meaty-delig.5lgdn.mongodb.net/users?retryWrites=true&w=majority&appName=yulina-is-a-meaty-delight";

export default async function Users(req, res) {
  try {
    // Чекаємо на підключення до бази даних
    await mongoose.connect(db);
    console.log("Connected to DB");

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
            isAutorise: false,
          });

          user
            .save()
            .then((result) => res.send("Успішно зареєстровано!"))
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              mongoose.connection.close();
              console.log("Close DB");
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
            console.log("Close DB");
          }
        }
        updateUser();
      }

      // G E T   U S E R
      else if (req.query.work === "get-user") {
        const { userID } = req.body;
        if (userID) {
          const finded = await User.findOne({
            _id: userID,
          });
          res.send(finded);
        }
      }

      // A U T H O R I S E   U S E R
      else if (req.query.work === "authorise") {
        const { phone, password } = req.body;
        console.log(phone, password);

        const finded = await User.findOne({
          "contacts.phone": phone,
        });
        console.log("finded", finded);
        // const isCurrectUser = (finded.password == password);
        if (finded) {
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
                id: finded["_id"],
              });
            } catch (err) {
              return res
                .status(400)
                .json({ error: `Помилка при авторизації: ${err}` });
            } finally {
              await mongoose.connection.close();
              console.log("Close DB");
            }
          }
          updateUser();
        } else {
          await mongoose.connection.close();
          console.log("Close DB");
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
            console.log("Close DB");
          }
        }
        deleteUserById();
      }
    }
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

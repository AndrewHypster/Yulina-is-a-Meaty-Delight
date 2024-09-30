import { promises as fs } from "fs";
import path from "path";

// Вкажіть шлях до файлу, який потрібно змінити
const filePath = path.join(process.cwd(), "./pages/api", "tg-admin.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Отримання нових даних з тіла запиту
      const { id } = req.body;
      console.log(id);

      // Запис нових даних у файл
      await fs.writeFile(filePath, `{"id": ${id}}`, "utf8");

      res.status(200).json({ message: "File updated successfully" });
    } catch (error) {
      // console.error('Error updating file:', error);
      res.status(500).json({ error: "Error updating file" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

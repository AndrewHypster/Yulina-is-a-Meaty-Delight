// пароль пошти julia1503

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Налаштування Nodemailer з використанням Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // ваш Gmail акаунт
        pass: process.env.GMAIL_PASS, // спеціальний "app password" з налаштувань безпеки
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // відправник
      to: process.env.GMAIL_USER, // отримувач
      subject: 'Замовлення', // тема листа
      text: text, // тіло листа
    };

    try {
      // Відправка листа
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: `Вашу заявку успішно відправлено! В продовж дня ми з вами звяжемося` });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
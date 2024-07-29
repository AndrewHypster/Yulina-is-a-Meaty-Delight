// Тг бот: https://t.me/Yulina_Is_A_Meaty_Delight_bot

import TelegramBot from 'node-telegram-bot-api';

const token = '7235691978:AAFdF1cjp2n35xofnhbmF2ATkHjyGTPm3_8';
const bot = new TelegramBot(token, { polling: false });

export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body;

    const chatId = message.chatid;
    const responseMessage = `Ви написали: ${message.text}`;
    bot.sendMessage(chatId, responseMessage);

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
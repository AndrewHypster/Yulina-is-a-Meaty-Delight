// Тг бот: https://t.me/Yulina_Is_A_Meaty_Delight_bot

const TelegramBot = require('node-telegram-bot-api');

// Замініть 'YOUR_TELEGRAM_BOT_TOKEN' на ваш токен
const token = '7235691978:AAFdF1cjp2n35xofnhbmF2ATkHjyGTPm3_8';

// Створення екземпляра бота
const bot = new TelegramBot(token, { polling: false });

// Обробка команди /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вітаю! Я ваш Telegram бот.');
});

// Обробка текстових повідомлень
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Якщо повідомлення містить текст
  if (msg.text) {
    // Відправка повідомлення з отриманим текстом
    bot.sendMessage(chatId, `чат айді: ${msg.chat}`);
  }
});
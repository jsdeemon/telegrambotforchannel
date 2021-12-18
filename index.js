const dotenv = require('dotenv')
const TelegramBot = require('node-telegram-bot-api');

dotenv.config() // configuring dotenv

const token = process.env.TELEGRAM_BOT_API_TOKEN;

const channel = process.env.CHANNEL_NAME; 

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/send Тут текст вашего сообщения"
bot.onText(/\/send (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // текст сообщения

  // оправляем сообщение на канал
  bot.sendMessage(channel, resp)
  // отправляем овет пользователю
  bot.sendMessage(chatId, `Ваше сообщение отправлено в канал ${channel}`);
});


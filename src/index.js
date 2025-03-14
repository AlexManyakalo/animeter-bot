require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);
bot.command("start", async ctx => {
  await ctx.reply("Привет! Я - Бот");
});

bot.on("message", async ctx => {
  await ctx.reply("Надо подумать...");
});

bot.start();

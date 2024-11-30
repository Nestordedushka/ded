const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.token)
bot.start((msg) => msg.reply("привіт  я можу надати тобі курс валюти"))
bot.help((msg) => msg.reply("/exchange sum from to -  повертається курс з валюти from у валюті to"))
bot.command("exchange",(msg) =>{
const {text} = msg.message
const[_, sum,from,tocd] = text.split(" ")


})



bot.launch(() => console.log("Start"))
"/exchange 100 USD UAH"
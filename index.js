const { Telegraf, Markup, Telegram } = require('telegraf')
const express = require('express')
const app = express()
const nervous = require('./nervous')
require('dotenv').config()
const isAdmin = require('./isAdmin')
const isSuperAdmin = require('./isAdmin')
const jadval = require('./jadval')
const bot = new Telegraf(process.env.BOT_TOKEN)
var date = new Date()
date.getMinutes()
// bot.use(Telegraf.log())
// MTIzNDU2Nzg5MA==
app.use(bot.webhookCallback('/' + process.env.BOT_TOKEN))
bot.telegram.setWebhook('https://kundalik-bot.herokuapp.com/' + process.env.BOT_TOKEN)

bot.command(['go', 'start'],  (ctx) => {
  console.log(ctx.from) 
  return  ctx.reply(`Assalom alaykum! ${ctx.from.first_name} qaysi kungi fanlar kerak?`, 
  Markup.keyboard([
    ['dushanba', 'seshanba'],
    ['chorshanba', 'payshanba'],
    ['juma', 'shanba', 'yakshanba']
  ]).resize()
  )
})

bot.hears(['dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba', 'yakshanba'], async (ctx) =>{
        ctx.replyWithHTML(jadval('group ' , ctx.message.text), {reply_to_message_id: ctx.message.message_id})
    }
)
bot.hears(['!flood'], ctx =>{
  ctx.reply(
    nervous(ctx.message.text, ctx.message.reply_to_message), {reply_to_message_id: ctx.message.reply_to_message.message_id}
    )
  // console.log(ctx.message.text)
  })
bot.on('sticker', (ctx) => ctx.reply('Sticker yuboraverma hali unaqa aqillimasman!', {reply_to_message_id: ctx.message.message_id}))
bot.help((ctx) => ctx.reply('Hurmatli ' + ctx.from.first_name + ' aka(opa)' + '\nMen hozircha faqat 317-18 guruh talabalariga yordam bera olaman!'))
bot.hears('hi', async (ctx) => ctx.reply('Hey there'))
bot.hears('Umar' || 'umar' , ctx => ctx.reply('Umarga yozmoqchi bo`lsangiz @Nano_code ga yozing!', {reply_to_message_id: ctx.message.message_id}))

{
// bot.command('inline', (ctx) => {
//   return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', {
//     parse_mode: 'HTML',
//       ...Markup.inlineKeyboard([
//         Markup.button.callback('Coke', 'Coke'),
//         Markup.button.callback('Pepsi', 'Pepsi')
//       ])
//   })
// })
// bot.command('random', (ctx) => {
//   return ctx.reply(
//     'random example',
//       Markup.inlineKeyboard([
//         Markup.button.callback('Coke', 'Coke'),
//         Markup.button.callback('Dr Pepper', 'Dr Pepper', Math.random() > 0.5),
//         Markup.button.callback('Pepsi', 'Pepsi')
//       ])
//   )
// })
// bot.command('caption', (ctx) => {
//   return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
//   {
//     caption: 'Caption',
//     parse_mode: 'Markdown',
//     ...Markup.inlineKeyboard([
//       Markup.button.callback('Plain', 'plain'),
//       Markup.button.callback('Italic', 'italic')
//     ])
//   })
// })
}

bot.command('uygabor', (ctx) => {
  if(isAdmin(ctx.from.id) == true){
    ctx.telegram.leaveChat(ctx.message.chat.id)  
    ctx.leaveChat()
  }
  if(isAdmin(ctx.from.id) === 'noId') 
    ctx.reply('Bu buyruq faqat adminlar uchun', {reply_to_message_id: ctx.message.message_id})
})

bot.command('uxla', ctx => {
  if(isSuperAdmin(ctx.from.id))
    bot.stop()
  else
    ctx.reply('Meni faqat Umar aka uxlata oladi😎!', {reply_to_message_id: ctx.message.message_id})
})


app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(process.env.PORT || 5000, () => {
  console.log('listening')
})

// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
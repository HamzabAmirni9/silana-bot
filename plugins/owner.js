import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212624855939
*instagram:*\nhttps://instagram.com/hamza___boyka_

*قناة الواتساب:*\nhttps://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* github.com/hamzaamirni1

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler

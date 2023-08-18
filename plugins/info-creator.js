import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let pp = `https://telegra.ph/file/066b47fe72724370caf5e.jpg`
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`6281398274790`, `Im-Dims??`, `Creator Euphyllia`, `Number`, `Dims@gmail.com`, `Japanese`, `https://github.com/Im-Dims`, `Hanya bisa copas om`],
    [`6282113847022`, `Euphyllia - MD`, `WhatsApp Bot`, `Number`, `hehe112@gmail.com`, `Indonesia`, `https://github.com/Im-Dims`, `Hanya bot biasa yg suka error`]
  ], fkontak)
  await m.reply(`Hai kak @${m.sender.split(`@`)[0]} itu adalah nomer ownerku, ga boleh di spam ya ~`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
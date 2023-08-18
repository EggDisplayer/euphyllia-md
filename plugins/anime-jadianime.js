import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://xzn.wtf/api/toanime?url=${url}&apikey=${global.dims}`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Nih kak kamu jadi anime ><', m)
	
}
handler.help = ['jadianime']
handler.tags = ['anime', 'ai']
handler.command = /^(jadianime|toanime)$/i
handler.limit = true

export default handler
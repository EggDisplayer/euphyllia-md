import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .remini'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://xzn.wtf/api/torch-srgan?url=${url}&apikey=${global.dims}`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan', m)
	
}
handler.help = ['remini1']
handler.tags = ['ai']
handler.command = /^(remini1)$/i
handler.limit = false
handler.premium = true
handler.exp = 6

export default handler
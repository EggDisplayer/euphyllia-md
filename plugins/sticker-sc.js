import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let media = `https://telegra.ph/file/ed952c4ef2872c11eb5ba.jpg`
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(anu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: fsizedoc, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Nyari apa kak??',
    body: ucapan + ' ' + name,
    thumbnail: await (await fetch(media)).buffer(),
    sourceUrl: sig
     }}
  })
    throw stiker.toString()
    
}

handler.customPrefix = /^(.sc|.script|.esceh)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let anu = [
 "https://telegra.ph/file/5783f1a014c908ab8b487.png", // Loli sc1
 "https://telegra.ph/file/0ac703bde1b3e543e943e.png"// Loli ga boleh
]
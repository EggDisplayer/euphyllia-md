/*var handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`*「 AFK MODE 」*\n\n➸ *Nama:* ${conn.getName(m.sender)}\n➸ *Alasan* ${text ? ': ' + text : ''}`)
  }
  handler.help = ['afk']
  handler.tags = ['main']
  handler.command = /^afk$/i
  
  export default handler*/
  
  // Ini pake gambar:v
  var handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let afk = 'https://telegra.ph/file/52eaebc8a706d9e54be8f.jpg'
    conn.sendMessage(m.chat, { image: { url: afk }, caption: `${conn.getName(m.sender)} Sekarang Sedang Afk Dengan Alasan ${text ? ': ' + text : ''}`}, { quoted: m})
  }
  handler.help = ['afk']
  handler.tags = ['main']
  handler.command = /^afk$/i
  
  export default handler
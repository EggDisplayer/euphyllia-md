let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/cf107c0832a1de96efd57.jpg'
let sewa = `
╭──「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 15K
┊• *Permanen:* 50K
┠──「 *PREMIUM* 」
┊• *1 Bulan:* 10K
╰────────────๑
┌─「 *Donasi & Payment* 」
│ • *Ovo:* [${global.povo}]
│ • *Dana:* 6282113847022
❏──────────────๑
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi|sewa|prem|premium$/i

export default handler

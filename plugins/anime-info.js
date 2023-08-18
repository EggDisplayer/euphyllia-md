// update By Xnuvers007

import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*_Masukan Judul Anime Yang Ingin Kamu Cari !_*`
conn.reply(m.chat, 'Sedang mencari anime... Silahkan tunggu', m)
let res = await fetch('https://api.jikan.moe/v4/anime?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { episodes, url, type, score, rating, scored_by, popularity, rank, season, year, members, background, status, duration, synopsis, favorites } = json.data[0]
// let studio = json.data[0].authors[0].name
// let studiomynimelist = json.data[0].authors[0].url
let producers = json.data[0].producers.map(prod => `${prod.name} (${prod.url})`).join('\n');
let studio = json.data[0].studios.map(stud => `${stud.name} (${stud.url})`).join('\n');
let genre = json.data[0].genres.map(xnuvers007 => `${xnuvers007.name}`).join('\n');
let judul = json.data[0].titles.map(jud => `${jud.title} [${jud.type}]`).join('\n');
let trailerUrl = json.data[0].trailer.url;

let animeingfo = `ᴛɪᴛʟᴇ: ${judul}
Trailer: ${trailerUrl}
ᴇᴘɪsᴏᴅᴇs: ${episodes}
ᴛʀᴀɴsᴍɪsɪ: ${type}
Genre: ${genre}
sᴛᴀᴛᴜs: ${status}
ᴅᴜʀᴀᴛɪᴏɴ: ${duration}
ғᴀᴠᴏʀɪᴛᴇ: ${favorites}
sᴄᴏʀᴇ: ${score}
rating: ${rating}
scored by: ${scored_by}
popularity: ${popularity}
rank: ${rank}
season / musim: ${season}
year / tahun (rilis): ${year} 
produser: ${producers}
studio: ${studio}
ᴍᴇᴍʙᴇʀs: ${members}
ᴜʀʟ: ${url}
ʙᴀᴄᴋɢʀᴏᴜɴᴅ: ${background}
sɪɴᴏᴘsɪs: ${synopsis}
`
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'animek.jpg', `*${htki} ANIME INFO ${htka}*\n` + animeingfo, m)

  conn.reply(m.chat, '*Note: Kadang Hasilnya Tidak Akurat!*', m)
}
handler.help = ['animeinfo <anime>', 'infoanime <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo|infoanime)$/i

export default handler
let handler  = async (m, { conn }) => {
  if (m.sender == info.nomorown + '@s.whatsapp.net') throw 'Inimah Owner Aku Udah Pasti 100% Ganteng'
  if (m.sender == info.nomorown1 + '@s.whatsapp.net') throw 'Aku Cewek, jadinya aku itu cantik bukan ganteng -_-'
  conn.reply(m.chat,`“${pickRandom(ganteng)}”`, m)
}
handler.help = ['gantengcek']
handler.tags = ['game']
handler.command = /^(gantengcek)$/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const ganteng = [
'📮Ganteng Level : 0.01%\n\nAsli, kuman aja pasti lari pas liat muka lu bang',
'📮Ganteng Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'📮Ganteng Level : 7%\n\nSerius ya Bro,, Lu ampir mirip kayak Monyet!',
'📮Ganteng Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'📮Ganteng Level : 22%\n\nMungkin karna lo sering liat berbuat maksiat😂',
'📮Ganteng Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'📮Ganteng Level : 35%\n\nYang sabar ya bang',
'📮Ganteng Level : 41%\n\nSemoga diberkati mendapat jodoh',
'📮Ganteng Level : 48%\n\nDijamin cewek susah deketin lo',
'📮Ganteng Level : 56%\n\nLu Setengah Ganteng :v',
'📮Ganteng Level : 64%\n\nCukuplah',
'📮Ganteng Level : 71%\n\nLumayan Ganteng juga lu ya',
'📮Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'📮Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'📮Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'📮Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'📮Ganteng Level : 77%\n\nGak akan Salah Lagi dah bang',
'📮Ganteng Level : 83%\n\nDijamin Cewek gak akan kecewa bang',
'📮Ganteng Level : 89%\n\nCewek2 pasti bakalan pingsan klo ngeliat kamu!',
'📮Ganteng Level : 94%\n\nAARRGGHHH!!!',
'📮Ganteng Level : 100%\n\nHa- Haloo, Ja- jadi Pa- pacarku dong~',
]

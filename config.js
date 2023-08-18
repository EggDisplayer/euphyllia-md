// Script Ori By Xyroinee
// Ditulis ulang oleh Im-Dims??
// Credits, jangan dihapus atau diubah!

// - - Thanks To - -
// • Allah Swt
// • Wh Mods Dev
// • Xyroinee
// • Creator Rest Api
// • Dll

// [!] jangan lupa ganti ownernya //

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


global.owner = [
['6281398274790', 'Dims', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6282113847022'
global.nomorown = '6281398274790'
global.nomorown1 = '6281398274790'
global.nomorown2 = '6281398274790'
global.nomorwa = '6285607265790'


global.readMore = readMore
global.author = 'Dims'
global.namebot = '​Euphyllia - Multidevice'
global.wm = '© Euphyllia By dims'
global.media = 'https://telegra.ph/file/02a8d3c4b00146bbfeb5d.jpg'
global.watermark = wm
global.wm2 = 'Euphyllia Bot'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `Euphyllia - MD`
global.stickpack = 'Euphyllia By'
global.stickauth = `© Dims`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1= 'Dims'
global.nameown2 = 'Dims'
global.Linkgc = 'Bentar'
global.lynk = '-'
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/' //instagram
global.sgh = 'https://github.com/Im-Dims' //github
global.sgc = 'https://chat.whatsapp.com/CHVe6nOEBcw1aRamTnHQ4q' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/@DimsT1943' //youtube
//Donasi/Payment
global.psaweria = 'https://saweria.co/'
global.ptrakterr = 'https://trakteer.id/'
global.pdana = '6282113847022' // dana
global.povo = '6281398274790'
global.pgopay = '-' // gopay
global.plinkaja = '-' //link aja
global.ppulsa = '-' // pulsa
global.ppulsa2 = '-' //pulsa 2
global.ListHargaSewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']
// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....'
global.wait = '_Sedang Di Proses, Mohon Tunggu Sebentar_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

// Untuk apikey biarin aja pake ini aja kalau fitur error beli apikeynya jangan cuma nyolong aja:v
//----------- Apikey -----------//
global.dims = 'dimsanu', // Milik im-Dims??
global.xyro = 'API MU', // https://api.xyroinee.xyz/
global.wibu = 'zenzkey_09f34527b955', // https://api.zahwazein.xyz/
global.keysxteam = '29d4b59a4aa687ca',
global.keysneoxr = '5VC9rvNx',
global.lolkey = 'BrunoSobrino_2', // Expired Agustus 2023
global.caliph = 'Lwlct6wi',
global.rose = '4b146102c4d500809da9d1ff',
global.xcoders = 'Frieren',
global.ibeng = 'tamvan',
global.botcahx = 'Admin',
global.fgmods = 'fg-dylux',
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu', //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K', // https://deepai.org
global.uptime = '' // Masukin apikey uptimerobot kamu disini // https://uptimerobot.com/dashboard?ref=website-header#mySettings

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site'

},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkey}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${wibu}`,
  'https://api-fgmods.ddns.net': `${fgmods}`,
  'https://api.botcahx.biz.id': `${botcahx}`,
  'https://api.ibeng.tech/docs': `${ibeng}`,
  'https://api.itsrose.site': `${rose}`,
  'https://api-xcoders.site': `${xcoders}`
}
//-----------------------------------//

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.optsnsfw = true 
global.premnsfw = true 
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini
global.lia = 'https://telegra.ph/file/e7d41d136aff71921c0f5.jpg'
global.thumb = 'https://telegra.ph/file/3cdaaf791f4eeffe51416.jpg' 
global.imagebot = 'https://telegra.ph/file/771ec1b185f02be1e573e.jpg'
global.giflogo = 'https://telegra.ph/file/c02bad57b6ce1d594a11c.mp4'
global.thumbs = ['https://telegra.ph/file/5adcb114b279c0085ac15.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'
]
global.fotonya1 = ' '
global.fotonya2 = ' ' 
global.fsizedoc = '999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/5adcb114b279c0085ac15.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

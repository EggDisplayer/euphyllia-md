/*import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `
╭─┈┈「 *Informasi User* 」
╎╭─────────✧
╎│⫹⫺ *Nama:* %name 
╎│⫹⫺ *Nomor:* %tag
╎│⫹⫺︎ *Premium:* %prems
╎│⫹⫺ *Limit:* %limit
╎│⫹⫺ *Money:* %money
╎│⫹⫺ *Role:* %role
╎│⫹⫺ *Level:* %level
╎│⫹⫺ *Xp:* %exp / %maxexp
╎│⫹⫺ *Total Xp:* %totalexp
╎╰─────────────✧
╠┈┈┈┈「 *Informasi Hari* 」
╎╭─────────✧
╎│⫹⫺ *Waktu:* %wib
╎│⫹⫺ *Hari:* %week %weton
╎│⫹⫺ *Tanggal:* %date
╎│⫹⫺ *Tanggal Islam:* %dateIslamic
╎╰─────────────✧
╠┈┈┈┈「 *Informasi Bot* 」
╎╭─────────✧
╎│⫹⫺ *Nama Bot:* %me
╎│⫹⫺ *Mode:* %mode
╎│⫹⫺ *Platform:* %platform
╎│⫹⫺ *Type:* Node.Js
╎│⫹⫺ *Baileys:* Multi Device
╎│⫹⫺ *Prefix:* [ *%_p* ]
╎│⫹⫺ *Uptime:* %muptime
╎│⫹⫺ *Database:* %rtotalreg dari %totalreg
╎╰─────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⳹‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎%readmore
`.trimStart(),
  header: '╔┈「 %category 」',
  body: '╎あ %cmd',
  footer: '╚┈┈┈┈┈┈┈┈┈⳹',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let tags = {
'main': 'Main',
'ai': 'Ai feature',
'anime': 'Anime',
'internet': 'Internet',
'downloader': 'Downloader',
'sticker': 'Sticker',
'tools': 'Tools',
'internet': 'Internet',
'islamic': 'Islamic',
'group': 'Group',
'game': 'Game',
'fun': 'Fun',
'rpg': 'RPG Games',
'quotes': 'Quotes',
'maker': 'Maker Text Logo',
'info': 'Info',
'owner': 'Owner',}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
 
 let fotonya = `${global.imagebot}`
 let namabotnya = `${global.namebot}`
 let ehe = `Date : ${global.week}`
 
 
 function _0x3597(){var _0x5dd904=['205167LUHyqm','613033cfDkqG','56310zClfDf','35oyfuff','1797360TsPuex','990IAJZpJ','sendMessage','3943740XslaEf','353210wghoKm','author','22jZSBIp','579944TzGnnR'];_0x3597=function(){return _0x5dd904;};return _0x3597();}function _0x4ec4(_0x506b58,_0x3a05d1){var _0x359705=_0x3597();return _0x4ec4=function(_0x4ec4e3,_0x1ee63c){_0x4ec4e3=_0x4ec4e3-0x1c3;var _0x1c128d=_0x359705[_0x4ec4e3];return _0x1c128d;},_0x4ec4(_0x506b58,_0x3a05d1);}function _0x96a002(_0x55cf8c,_0x3c0b91){return _0x4ec4(_0x3c0b91-0xb9,_0x55cf8c);}(function(_0x577d72,_0x3be57d){var _0x497e25=_0x577d72();function _0x346403(_0x47e3af,_0x567b1f){return _0x4ec4(_0x567b1f-0x2be,_0x47e3af);}while(!![]){try{var _0x1f6b16=-parseInt(_0x346403(0x489,0x48b))/0x1+parseInt(_0x346403(0x486,0x488))/0x2*(parseInt(_0x346403(0x48a,0x48a))/0x3)+-parseInt(_0x346403(0x485,0x482))/0x4+-parseInt(_0x346403(0x48c,0x486))/0x5+parseInt(_0x346403(0x484,0x485))/0x6+parseInt(_0x346403(0x486,0x481))/0x7*(-parseInt(_0x346403(0x48d,0x489))/0x8)+parseInt(_0x346403(0x482,0x483))/0x9*(parseInt(_0x346403(0x486,0x48c))/0xa);if(_0x1f6b16===_0x3be57d)break;else _0x497e25['push'](_0x497e25['shift']());}catch(_0x1acb6e){_0x497e25['push'](_0x497e25['shift']());}}}(_0x3597,0x823fb),conn[_0x96a002(0x280,0x27f)](m['chat'],{'text':text,'contextInfo':{'externalAdReply':{'title':namabotnya,'body':ehe,'thumbnailUrl':fotonya,'sourceUrl':sig,'mediaType':0x1,'renderLargerThumbnail':!![]}}}));
      
      
conn.sendFile(m.chat, `${audio.getRandom()}`, "inimenu.mp3", null, m, true, {
			type: "audioMessage",
			ptt: true,
		});
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}

const audio = [
	"https://bucin-livid.vercel.app/audio/yowaimo.mp3",
	"https://bucin-livid.vercel.app/audio/summer.mp3",
	"https://bucin-livid.vercel.app/audio/one.m4a",
]; */ 

// Hehe pake yg bawah aja

import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import os from 'os'
import fs from 'fs'

let handler  = async (m, { conn, command, args, usedPrefix }) => {
//-----------FITUR BOT--------
   let mode = global.opts['self'] ? 'Private' : 'Publik'
   let platform = os.platform()
   let tag = `@${m.sender.replace(/@.+/, '')}`
   let totalreg = Object.keys(global.db.data.users).length
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let mentionedJid = [m.sender]
  let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
  let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let { premium, level, limit, exp, money, registered, regTime, age, pasangan, role } = global.db.data.users[m.sender]
  let username = conn.getName(who)
  let name = conn.getName(who)
  const chats = Object.keys(await conn.chats)
  const groups = Object.keys(await conn.groupFetchAllParticipating())
  const block = await conn.fetchBlocklist()
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)
  let timestamp = speed();
  let latensi = speed() - timestamp;
  //---------------------
  
//-----------GAMBAR--------
//  let anu = `${pickRandom(['./media/menu.mp4', './media/menu1.mp4', './media/menu2.mp4', './media/menu3.mp4', './media/menu4.mp4'])}`
  let anu = fs.readFileSync("./media/menu.mp4")
  let pp = `${global.imagebot}`
  //---------------------
  
//-----------TIME---------
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 //---------------------

let awal = `
╔┈┈『 *Info user* 』
┆•︎ *Nama:* ${username}
┆•︎ *Nomor:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┆•︎ *Umur:* ${registered ? age : ''}  Tahun
┆•︎ *Pasangan:* ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak punya`}
┆•︎ *Premium:* ${premium ? "Premium User" :"Free User"}
┆•︎ *Limit Tersisa:* ${limit} limit
┆•︎ *Level Saat Ini:* ${level}
┆•︎ *Role Saat Ini:* ${role}
╠┈┈『 *Info Tanggal* 』
┆• *Hari:* ${week} ${weton}
┆•︎ *Tanggal:* ${date}
┆•︎ *Jam:* ${wib}
╠┈┈『 *Info Bot* 』
┆•︎ *Nama Bot:* ${global.namebot}
┆•︎ *Mode:* ${mode}
┆•︎ *Total User:* ${Object.keys(global.db.data.users).length}
┆•︎ *Total Fitur:* ${fitur.length}
┆•︎ *Total Chat:* ${chats.length - groups.length}
┆•︎ *Total Group:* ${groups.length}
┆•︎ *Runtime:* ${muptime}
┆•︎ *Database:* ${rtotalreg} dari ${totalreg}
┖────────────┈ ⳹

╭─「 *List Menu Euphyllia* 」
╎ぎ *Menu Ai*
╎ぎ *Menu Anime*
╎ぎ *Menu Download*
╎ぎ *Menu Internet*
╎ぎ *Menu Tools*
╎ぎ *Menu Maker*
╎ぎ *Menu Random*
╎ぎ *Menu Group*
╎ぎ *Menu Game*
╎ぎ *Menu Sticker*
╎ぎ *Menu Owner*
╰────`
let ai = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *AI* 」
╎ぎ .animediff
╎ぎ .diffusion
╎ぎ .ai
╎ぎ .remini
╎ぎ .color
╎ぎ .hdr
╎ぎ .toanime
╎ぎ .blur
╰────`
let anim = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Animanga* 」
╎ぎ .amv
╎ぎ .animeinfo
╎ぎ .charainfo
╎ぎ .charadetail
╎ぎ .doujinsearch
╎ぎ .doujindetail
╎ぎ .doujinlatest
╎ぎ .komikusearch
╎ぎ .komikudetail
╎ぎ .komikulatest
╎ぎ .mangainfo
╎ぎ .mangatoons
╎ぎ .nhentaisearch
╎ぎ .nhentaidetail
╎ぎ .otakusearch
╎ぎ .otakudetail
╎ぎ .otakulatest
╎ぎ .storyanime
╎ぎ .whatanime
╰────`
let search = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Internet* 」
╎ぎ .artic
╎ぎ .charagi
╎ぎ .cuaca
╎ぎ .fetch
╎ぎ .get
╎ぎ .gempa
╎ぎ .gimage
╎ぎ .githubstalk
╎ぎ .google
╎ぎ .lirik
╎ぎ .ssweb
╎ぎ .jadwaltv
╎ぎ .jarak
╰────`
let download = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* q
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Downloader* 」
╎ぎ .danbooru
╎ぎ .facebook
╎ぎ .gdrive
╎ぎ .gitclone
╎ぎ .instagram
╎ぎ .mediafire
╎ぎ .pinterest
╎ぎ .pixiv
╎ぎ .play
╎ぎ .sfile
╎ぎ .tiktok
╎ぎ .twitter
╎ぎ .ytmp3
╎ぎ .yts
╎ぎ .ytmp4
╰────`
let tools = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Tools*」
╎ぎ .monitor
╎ぎ .smeme
╎ぎ .addvn
╎ぎ .addstiker
╎ぎ .delmsg
╎ぎ .all
╎ぎ .listvn
╎ぎ .liststicker
╎ぎ .qr
╎ぎ .qrcode
╎ぎ .react
╎ぎ .readmore
╎ぎ .spoiler
╎ぎ .readviewonce
╎ぎ .run
╎ぎ .wastalk
╎ぎ .style
╎ぎ .tomp3
╎ぎ .tovn
╎ぎ .upload
╎ぎ .translate
╎ぎ .tts
╎ぎ .encrypt
╰────`
let maker = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Maker* 」
╎ぎ .filter
╎ぎ .bonk
╎ぎ .burn
╎ぎ .discordhouse
╎ぎ .glitch
╎ぎ .insta
╎ぎ .pesbuk
╎ぎ .kaneki
╎ぎ .loliggo
╎ぎ .nekosad
╎ぎ .nekosad
╎ぎ .sertitolol
╎ぎ .simpcard
╰────`
let random = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Random* 」
╎ぎ .maid
╎ぎ .waifu
╎ぎ .marin-kitagawa
╎ぎ .mori-calliope
╎ぎ .raiden-shogun
╎ぎ .oppai
╎ぎ .selfies
╎ぎ .uniform
╎ぎ .neko
╎ぎ .hentai
╎ぎ .milf
╎ぎ .ecchi
╎ぎ .ero
╎ぎ .bocil
╎ぎ .oppai
╎ぎ .china
╎ぎ .cosplay
╎ぎ .geayubi
╎ぎ .gensin
╎ぎ .hentai
╎ぎ .japan
╎ぎ .korea
╎ぎ .loli
╰────`
let group = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Group* 」
╎ぎ .enable
╎ぎ .disable
╎ぎ .cekid
╎ぎ .ceksewa
╎ぎ .del
╎ぎ .demote
╎ぎ .hidetag
╎ぎ .infogrup
╎ぎ .linkgc
╎ぎ .promote
╎ぎ .revoke
╎ぎ .setbye
╎ぎ .setdesc
╎ぎ .sdesc
╎ぎ .setnamagc
╎ぎ .setppgc
╎ぎ .group
╎ぎ .setwelcome
╎ぎ .gcsider
╎ぎ .tagadmin
╎ぎ .tagall
╎ぎ .tagme
╎ぎ .cekpacar
╎ぎ .ikhlasin
╎ぎ .tembak
╎ぎ .putus
╎ぎ .terima
╎ぎ .tolak
╎ぎ .odemote
╎ぎ .getprofile
╰────`
let game = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Games* 」
╎ぎ .caklontong
╎ぎ .family100
╎ぎ .iqtest
╎ぎ .math
╎ぎ .siapakahaku
╎ぎ .suit
╎ぎ .susunkata
╎ぎ .tebakanime
╎ぎ .tebakbendera
╎ぎ .tebakchara
╎ぎ .tebaksurah
╎ぎ .tekateki
╎ぎ .tebakkata
╎ぎ .tictactoe
╎ぎ .ttt
╎ぎ .judi
╎ぎ .casino
╎ぎ .putarkoin
╎ぎ .merampok
╎ぎ .petshop
╰────`
let sticker = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Sticker* 」
╎ぎ .getexif
╎ぎ .qc
╎ぎ .sticker
╎ぎ .s
╎ぎ .toimg
╎ぎ .tovideo
╎ぎ .smeme
╎ぎ .ttp
╎ぎ .wm
╰────`
let owner = `❏ *Name:* ${username}
❏ *Mode:* ${mode}
❏ *Platform:* ${platform}
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╭─「 *Owner* 」
╎ぎ .enable
╎ぎ .disable
╎ぎ .add
╎ぎ .addlimit
╎ぎ .addprem
╎ぎ .addsewa
╎ぎ .balas
╎ぎ .banchat
╎ぎ .ban
╎ぎ .bcchats
╎ぎ .bcgc
╎ぎ .block
╎ぎ .unblock
╎ぎ .cleartmp
╎ぎ .clearwin
╎ぎ .creategroup
╎ぎ .delprem
╎ぎ .delsewa
╎ぎ .deleteuser
╎ぎ .df
╎ぎ .getdb
╎ぎ .getfile
╎ぎ .getplugin
╎ぎ .gp
╎ぎ .join
╎ぎ .kick
╎ぎ .leavegc
╎ぎ .out
╎ぎ .opromote
╎ぎ .setppbot
╎ぎ .saveplugin
╎ぎ .simulate
╎ぎ .unbanchat
╎ぎ .unban
╎ぎ .addstore
╎ぎ .delstore
╰────`

  try {
    if (/menu/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ai':
            conn.sendMessage(m.chat, {
      text: ai,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'anime':
            conn.sendMessage(m.chat, {
      text: anim,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'internet':
            conn.sendMessage(m.chat, {
      text: search,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'download':
            conn.sendMessage(m.chat, {
      text: download,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'tools':
            conn.sendMessage(m.chat, {
      text: tools,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'maker':
            conn.sendMessage(m.chat, {
      text: maker,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'random':
            conn.sendMessage(m.chat, {
      text: random,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'group':
            conn.sendMessage(m.chat, {
      text: group,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'game':
            conn.sendMessage(m.chat, {
      text: game,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'sticker':
            conn.sendMessage(m.chat, {
      text: sticker,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'owner':
            conn.sendMessage(m.chat, {
      text: owner,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'info':
            conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: global.imagebot,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
          default:
            return await conn.sendMessage(
    m.chat,
    {video: anu, gifPlayback: true, caption: awal },
    {quoted: m}
  );
        }
    } 
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)/i
handler.register = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari* ', h, ' *Jam* ', m, ' *Menit* ', s, ' *Detik*'].map(v => v.toString().padStart(2, 0)).join('')
}
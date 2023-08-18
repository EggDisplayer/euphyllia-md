import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${ara.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ara-ara|ara-ara|Ara|ara)$/i;
handler.command = new RegExp()

export default handler;

const ara = [
"./loli/ara.mp3",
"./loli/ara1.mp3",
"./loli/ara2.mp3",
]
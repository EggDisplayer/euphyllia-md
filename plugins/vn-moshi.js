import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${moshi.getRandom()}`, "moshi.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Moshi-moshi|moshi-moshi|Moshi)$/i;
handler.command = new RegExp()

export default handler;

const moshi = [
"./loli/moshi moshi.mp3",
"./loli/moshi mossh.mp3",
]
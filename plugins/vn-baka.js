import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "baka.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Baka|baka)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./loli/baka.mp3",
"./loli/baka1.mp3",
]
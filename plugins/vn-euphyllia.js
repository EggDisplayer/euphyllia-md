import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${lia.getRandom()}`, "lia.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(euphy|lia|euphyllia|Euphyllia)$/i;
handler.command = new RegExp();

export default handler;

const lia = [
"./loli/adaapa.mp3",
"./loli/adaapa1.mp3",
"./loli/kenapa.mp3",
"./loli/iya kak.mp3",
]
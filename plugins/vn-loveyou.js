import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${love.getRandom()}`, "lopyou.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|loveyou|love|lope|loveyou)$/i;
handler.command = new RegExp();

export default handler;


const love = [
"./loli/lopyou.mp3",
"./loli/lopyou1.mp3"
]

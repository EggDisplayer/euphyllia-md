/*const BugBaru = /wa.me\/(?:settings\/)?/i // tambahin sendiri

export async function before(m, { text, isAdmin, isBotAdmin }) {
        return !0
    if (!m.isGroup) return !1
    const BugBaru = BugBaru.exec(m.text)
        if (isBotAdmin && !m.fromMe) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    return conn.sendMsg(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
        } 
    return !0
}

export const disable = true*/

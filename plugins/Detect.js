let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `

`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@254114018035/i
handler.command = new RegExp

module.exports = handler


import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '🧚‍♂️ ENTER VIDEO/AUDIO NAME'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
🔍𝐕𝐈𝐃𝐄𝐎 𝐓𝐈𝐓𝐋𝐄 : ${v.title}
🔗𝐕𝐈𝐃𝐄𝐎 𝐔𝐑𝐋 : ${v.url}
🕗𝐕𝐈𝐃𝐄𝐎 𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍 : ${v.timestamp}
📅𝐔𝐏𝐋𝐎𝐀𝐃𝐄𝐃 𝐎𝐍 : ${v.ago}
👻𝐕𝐈𝐃𝐄𝐎 𝐕𝐈𝐄𝐖𝐒 : ${v.views}

   `.trim()
      case 'canal': return `
✨ *${v.name}* (${v.url})
🔔${v.subCountLabel} (${v.subCount}) Suscribirse
🎥 ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts'] 

export default handler

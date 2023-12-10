
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `🧚‍♂️PLEASE ENTER SONG URL :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `🧚‍♂️ *AUDIO NOT FOUND !!!*`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
  try {
		let q = '128kbps'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀 𝐘𝐎𝐔𝐓𝐔𝐁𝐄🧚‍♂️
  
🔍𝐀𝐔𝐃𝐈𝐎 𝐓𝐈𝐓𝐋𝐄 : ${title}

📂𝐀𝐔𝐃𝐈𝐎 𝐒𝐈𝐙𝐄 : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(` Error: 𝐓𝐈𝐌𝐄 𝐎𝐔𝐓`)
} 

}
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['ytmp3', 'fgmp3'] 
handler.diamond = true

export default handler

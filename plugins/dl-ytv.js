
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `🧚‍♂️ PLEASE ENTER VIDEO URL :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `🧚‍♂️ *VIDEO NOT FOUND !!*`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(`🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀 𝐘𝐎𝐔𝐓𝐔𝐁𝐄🧚‍♂️\n\n📁𝐕𝐈𝐃𝐄𝐎 𝐒𝐈𝐙𝐄 : ${size}\n✨𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐀𝐋𝐈𝐓𝐘 : ${q}\n\n📩 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐋𝐈𝐌𝐈𝐓 *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀 𝐘𝐎𝐔𝐓𝐔𝐁𝐄🧚‍♂️
  
🔍𝐕𝐈𝐃𝐄𝐎 𝐓𝐈𝐓𝐋𝐄 : ${title}

♻️𝐕𝐈𝐃𝐄𝐎 𝐓𝐘𝐏𝐄 : mp4

✨𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐀𝐋𝐈𝐓𝐘 : ${q}

📁𝐕𝐈𝐃𝐄𝐎 𝐒𝐈𝐙𝐄 : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {	
       m.reply(`_TIME OUT_`) 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'fgmp4']
handler.diamond = false

export default handler

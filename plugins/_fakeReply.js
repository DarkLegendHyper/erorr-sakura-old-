
import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/85b56f46f5af81079e6f9.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'support group', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: 'Donate', title: 'PayPal', body: 'ayuda a mantener el bot activo', thumbnailUrl: pp, sourceUrl: fgpyp }}}
    
    //reply Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: fgig, mediaType: 'VIDEO', description: 'Sigueme por Instagram', title: '🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀_𝐌𝐃🧚‍♂️', body: 'sigueme por Instagram', thumbnailUrl: pp, sourceUrl: fgig }}} 
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: 'Suscribete : ' + fgyt, title: '🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀_𝐘𝐎𝐔𝐓𝐔𝐁𝐄🧚‍♂️', body: '🫂𝐒𝐘𝐁𝐄𝐑-𝐃𝐄𝐌𝐎𝐍𝐒 𝐓𝐄𝐀𝐌', thumbnailUrl: pp, sourceUrl: fgyt }}}

}

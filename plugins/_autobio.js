
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `🧚‍♂️𝐓𝐇𝐄 𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀_𝐌𝐃 𝐕2 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐎𝐓 𝐑𝐔𝐍 𝐓𝐈𝐌𝐄 ${muptime} 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐘𝐁𝐄𝐑-𝐃𝐄𝐌𝐎𝐍𝐒 𝐓𝐄𝐀𝐌....`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' 📅𝐃𝐀𝐘𝐒 ️', h, ' 🕗𝐇𝐎𝐔𝐑 ', m, ' ⏳𝐌𝐈𝐍𝐔𝐓𝐄𝐒'].map(v => v.toString().padStart(2, 0)).join('')
}

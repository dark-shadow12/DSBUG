const fs = require('fs')
const chalk = require('chalk')


global.owner = ['62895360424437'] // ganti nomor wa lu
global.bugrup = ['62895360424437'] // ganti nomor wa lu
global.packname = 'BOT BUG BY YUKIPEDIA' 
global.author = 'Yuki Pedia'
global.namaGede = 'YUKI PEDIA'
global.nameBot = 'BOT YUKI'
global.modeBot = 'PUBLIC'
global.runnBot = 'PANNEL'
global.ownerNumber = '6285710677726'

global.mess = {
success: 'Sukses, Jangan Lupa Subscribe YouTube *PUTRA OFFC*',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: '*LOADING....* Mohon Sabar Ya',
wrongFormat: 'Format yg anda masukan salah',
error: 'Maaf terjadi kesalahan',
premium: 'Kusus Pengguna Premium',
resseler: 'Kamu Bukan Resseler Pannel ! Daftar Cuman 20.000\n\nHubungi Wa.me/6285697886101',
onlyUser: 'Silahkan Daftar Terlebih Dahulu Untuk Menggunakan Fitur Bot Ini',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

// SILAHKAN SETTING SESUAI PERINTAH //
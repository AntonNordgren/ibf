const fs = require('fs')
const folderPath = './static/images/player'

fs.readdir(folderPath, (err, files) => {
  files.forEach(file => console.log(file))
})

module.exports = {

}
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

const GSheetReader = require('g-sheets-api')

// const fs = require('fs')
// const folderPath = './server/static/images/players'

// fs.readdir(folderPath, (err, files) => {
//   files.forEach(file => {
//     let number = file.substr(0, file.length - 4)
//     console.log(number)
//   })
// })


app.get('/api/getStatSheet', (req, res)=> {
  GSheetReader({sheetId: '1H7ZTdQ32TtCzWAmLRch5MT3GcqNc376Y0Pe4LZ2Kgjc',},
    result => res.send(result),
    error => console.log(error)
  )
})

app.get('/api/getPlayerSheet', (req, res)=> {
  GSheetReader({sheetId: '1gnkim_8ayNO9mq35xE_-0JcYu87x7S-lJE6Abfxl848',},
    result => res.send(result),
    error => console.log(error)
  )
})

app.get('/api/getPlayerById/:id', (req, res)=> {
  GSheetReader({sheetId: '1gnkim_8ayNO9mq35xE_-0JcYu87x7S-lJE6Abfxl848',},
    result => res.send(result.find(player => player.nummer == req.params.id)),
    error => console.log(error)
  )
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
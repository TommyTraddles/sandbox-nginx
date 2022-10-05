const os = require('os')
const app = require('express')()
const { API_ID } = process.env

app.use('/', async (req, res, next) => {
  const data = {
    API_ID,
    curr_os_network: {
      address: os.networkInterfaces().eth0[0].address,
      mac: os.networkInterfaces().eth0[0].mac,
    },
  }
  return res.json({
    data,
  })
})

app.listen(API_ID, function () {
  console.log('✅ server up on port: ', this.address().port)
})

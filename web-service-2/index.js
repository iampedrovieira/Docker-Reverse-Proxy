const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.json({
    "Docker Project":"1",
    "Nginx Proxy":"True",
    "CloudFlare DNS":"True",
    "Docker-Compose":"True",
    "Description":"2 subdomains redirected to same machine but for 2 diferent containers",
    "Container 2": "webserive2.iampedrovieira.pt"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
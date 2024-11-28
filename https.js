const https = require('https')
const fs = require('fs')

https.createServer({
    cert: fs.readFileSync(''),
    key: fs.readFileSync(''),
    ca: [
        fs.readFileSync(),
    ]
}, (req, res)=> {
    
})
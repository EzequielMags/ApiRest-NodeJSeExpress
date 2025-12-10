// criar um servidor http local
// import http from "http"

// const rotas = {
//     "/": "manda o pix now",
//     "/sobremim": "manda o pix pra mim"
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/pain"})
     
//     res.end(rotas[req.url]) 
// })

import app from "./src/app.js"

const PORT = 3000


app.listen(PORT, () => { //listen == ouvir
    console.log("servidor esta bizuiando")
}) 

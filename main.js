const { app, BrowserWindow } = require("electron")
const path = require("path")

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "public/icons", "logo.png"),
    })

    janela.loadFile("public/login.html")
}

app.whenReady().then(criarJanela)
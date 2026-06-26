const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const database = require("./db")   

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "public/icons", "logo.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    janela.loadFile("public/login.html")
    janela.webContents.openDevTools()

}

app.whenReady().then(criarJanela)

ipcMain.handle("login", async (event, email, password) => {
    console.log("5. Chamei a função login do main.js")
    console.log("6. Email:", email, "Senha:", password)

    // Simular uma chamada à base de dados
    const [rows] = await database.query("select * from users where email = ? and password = ? and is_active = 1;", [email, password]);
    console.log("7. Resultado da consulta:", rows)
})
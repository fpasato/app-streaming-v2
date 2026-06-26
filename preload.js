const {contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld("api", {
    login: function(email, password){
        console.log('3. Chamei a função login do preload.js')

        
        return ipcRenderer.invoke('login', email, password)
    }
})
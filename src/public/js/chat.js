const socket = io.connect('https://hotchat-280004.df.r.appspot.com')
const chat = document.getElementById("hotchat")
socket.on("message", (data) => {
    console.log('data', data)
    const p = document.createElement("P")
    const t = document.createTextNode(` ${data.username}: ${data.message}`)
    p.appendChild(t)
    chat.prepend(p)
})
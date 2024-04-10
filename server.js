import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // Head cabeçalho de uma requisição HTTP
    res.end("Curso de Node.js");
})

server.listen(PORT, () => {
    console.log("Hello, world");
})
// Listen recebe dois parâmetros: a porta e uma função callback

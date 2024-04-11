import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js!",
    "/cachorro": "Entrei na rota cachorro",
    "/raca": "Entrei na rota raça"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // Head cabeçalho de uma requisição HTTP
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("Hello, world");
})
// Listen recebe dois parâmetros: a porta e uma função callback

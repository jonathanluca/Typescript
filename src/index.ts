import { Console } from 'console';
import http from 'http';

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(
        JSON.stringify({
            data: "It works"
        })
    );
});

server.listen(3000, ()=>{
    console.log("Servidor rodando...");
})
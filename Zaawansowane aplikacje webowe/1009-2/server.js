const http = require("http");
const fs = require("fs");
const html = fs.readFileSync("page.html");
const css = fs.readFileSync("style.css");
const script = fs.readFileSync("script.js");
const favi = fs.readFileSync("favicon.ico");

const server = http.createServer( (req,res)=>{
    console.log("met.: ", req.method, " url: ", req.url);
    switch (req.method + ";" + req.url) {
        case "GET;/":
            res.writeHead(200, {"content-type":"text/html;charset:utf8"});
            res.end(html);
            break;
        case "GET;/style.css":
            res.writeHead(200, {"content-type":"text/css;charset:utf8"});
            res.end(css);
            break;
        case "GET;/script.js":
            res.writeHead(200, {"content-type":"text/js;charset:utf8"});
            res.end(script)
            break;
        case "GET;/favicon.ico":
            res.writeHead(200, {"content-type":"text/favicon;charset:utf8"});
            res.end(favi)
            break;
        default:
            break;
    }
});

const port = 9999;
server.listen(port, ()=>{
    console.log("server listening on port: " + port);
})

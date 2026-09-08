const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/action1" method="post">
        <label for="">nazwa</label>
        <input type="text" name="nazwa">
        <input type="submit" value="wyślij">
    </form>
</body>
</html>
`;

const server = http.createServer( (req, res)=>{
    console.log("met.:", req.method, "url:", req.url);
    switch (req.method + ";" + req.url) {
        case "GET;/":
            res.writeHead(200, {"content-type":"text/html;charset=utf8"});
            res.end(html);
            break;
        case "POST;/action1":
            res.writeHead(200, {"content-type":"text/plain;charset=utf8"});
            res.end("Serwer odebrał dane od klienta");
            break;

        default:
            res.writeHead(404, {"content-type":"text/plain;charset=utf8"});
            res.end("błędne żądanie");
            break;
    }

} );

const port = 9999;
server.listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
});

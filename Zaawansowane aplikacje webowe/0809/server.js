const http = require("http");

const uczniowie = [];

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
        <label for="">nazwa:</label>
        <input type="text" name="nazwa">
        <label for="">imie:</label>
        <input type="text" name="imie">
        <label for="">nazwisko: </label>
        <input type="text" name="nazwisko">
        <label for="">Nr.dziennika:</label>
        <input type="text" name="nrDziennika">
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
            let body = "";
            req.on('data', (chunk)=>{
                console.log("kawałek danych:" + chunk.toString());
                body+=chunk;
            }); 
            req.on('end', ()=>{
                const params= new URLSearchParams(body);

                const nazwa = params.get("nazwa");
                const imie = params.get("imie");
                const nazwisko = params.get("nazwisko");
                const nrDziennika = params.get("nrDziennika");

                const uczen = {
                    nazwa: nazwa,
                    imie: imie,
                    nazwisko: nazwisko,
                    nrDziennika: nrDziennika
                };
                uczniowie.push(uczen);

                console.table(uczniowie);

                res.writeHead(200, {"content-type":"text/plain;charset=utf8"});
                res.end("Serwer odebrał dane od klienta: " + nazwa + " " + nazwisko);
            });

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


// from imie nazwisko nr.dziennika
// obiekt uczen backe
// dodanwany obiekt do tabeli co kolejny
// tabela wynik

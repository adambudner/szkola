const http = require("http");
const server = http.createServer( (req,res)=>{
    console.log("met.: ", req.method, " url: ", req.url);
    switch (req.method + ";" + req.url) {
        case "GET;/":
            
            break;
    
        default:
            break;
    }
});

const http=require("http");
const Server=http.createServer((req,res)=>{
    if (req.url==="/"){
        res.end("Welcome to Node srever");
    }else if(req.url==="/about"){
        res.end("About Page")
    }else if (req.url==="/contact"){
        res.end("Contact page");
    }else{
        res.statusCode=404;
        res.end("404 error:Page not found");
    }
});
Server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/");
});
let myhttp= require("http");

let myserver= myhttp.createServer(

  function( myrequest, myresponse){
    console.log (myrequest.url);

    let mytext;
    if (myrequest.url=== "/hey") {
      mytext= "Well hello there...";
    } else {
      mytext = "I dont know you nerds who are taking CS55.13";
    }

    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    myresponse.end( mytext + " Get away from me!! Help!\n " );

  }
);

myserver.listen(8080,"0.0.0.0");
console.log("server has started");
const express = require("express") // Use express.js module
const http = require("http")


const app = express() // Create an express.js app

app.use((req, res, next) => {  // Request, Response and Next functions
    const minute = new Date().getMinutes() // Create a const that holds the current time minutes.
    if(minute % 2 === 0) { // if the current minutes remainder of 2 equals 0
    next() // Continue to the next function
    } else {
    res.statusCode = 403 // Provide the error code
    res.end("Not authorized!") // End the response providing a message.
    }

})

app.use((req, res) => {
res.writeHead(200, {"Content-Type" : "text/plain"}) // Create a call back handler request, statusCode 200 and the content type plain text.
res.end("Hello World!") // End the response providing a message.
})


http.createServer(app).listen(3000) // Create for the application using port 3000 local host http server.

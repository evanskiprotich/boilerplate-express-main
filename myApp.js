let express = require('express');
let app = express();

// Serve static files from the "public" directory
app.use("/public", express.static(__dirname + "/public"));
// console.log("Hello World");
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// app.listen(3000, function () {
//   console.log("App Listening to port 3000");
// })

;

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});





































 module.exports = app;

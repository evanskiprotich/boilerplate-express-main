let express = require('express');
let app = express();

// console.log("Hello World");
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// app.listen(3000, function () {
//   console.log("App Listening to port 3000");
// })




































 module.exports = app;

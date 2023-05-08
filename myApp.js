let express = require('express');
let app = express();

// console.log("Hello World");
app.get('/', (req, res) => {
  res.send("Hello Express");
})

// app.listen(3000, function () {
//   console.log("App Listening to port 3000");
// })




































 module.exports = app;

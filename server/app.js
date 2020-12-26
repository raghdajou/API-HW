const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user', function(req, res) {
    var user_name = req.params('name');
    var user_message = req.params('message');
//we can print result in other way:
// console.log(request.params.user.name);
    // console.log(request.params.user.message);
});


app.post('/user', function(req, res) {
    var user_name1 = req.body.user.name;
    var message1 = req.body.user.message;
    // we can print result in other way:
    // console.log(request.body.user.name);
    // console.log(request.body.user.message); 
});
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});


const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
//contain end point
dishRouter.route('/')
.all((req, res, next) =>{
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 //continue on to look for additional specifcation down below here which will match ./dishes endpoint
 next();
})

.get((req, res, next) => {
 res.end('Will send all the dishes to you!');
})

.post((req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
 res.statusCode = 403;
 res.end('Put operation not supported on /dishes');
})

.delete((req, res, next) => {
 res.end('deleting all the dishes!');
})

module.exports = dishRouter;
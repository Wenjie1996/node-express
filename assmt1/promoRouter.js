const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
//contain end point
promoRouter.route('/')
.all((req, res, next) =>{
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 //continue on to look for additional specifcation down below here which will match ./dishes endpoint
 next();
})

.get((req, res, next) => {
 res.end('Will send all the promotions to you!');
})

.post((req, res, next) => {
 res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
 res.statusCode = 403;
 res.end('Put operation not supported on /promos');
})

.delete((req, res, next) => {
 res.end('deleting all the promotions!');
})

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promo/'+ req.params.promoId);
})

.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
})

module.exports = promoRouter;
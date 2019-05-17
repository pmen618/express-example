var express = require('express');
var multer = require('multer');

var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware')

var upload = multer({dest: './public/uploads/'});

router.get('/', controller.index);


router.get('/cookie', function( req, res, next){
	res.cookie('user-id', 12345);
	res.send('hi');
});

router.get('/search', controller.search); 

router.get('/create', controller.create);

router.get('/:id', controller.view);


router.post('/create', upload.single('avatar'), 
	validate.postCreate, controller.postCreate);

module.exports = router;
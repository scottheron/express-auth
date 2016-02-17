var db = require('./models');

//create user
db.user.create({
	name: 'Scott',
	email: 'scott.heron@outlook.com',
	password: 'WDI2016'
}).then(function(user){
	console.log(user.get());
	//find a user
	db.user.findById(1).then(function(user){
	console.log(user.get());
	});
});


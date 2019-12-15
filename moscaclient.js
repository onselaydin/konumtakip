var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://157.230.105.22:1883');

client.subscribe('new-user');

client.on('connect', function() {
	console.log('connected!');

	client.publish('new-user', 'Önsel-' + Math.ceil(Math.random() * 10));
});

client.on('message', function(topic, message) {
	console.log(topic, ' : ', message.toString());
});
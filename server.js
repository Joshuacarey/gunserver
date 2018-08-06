var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || 8765;
var express = require('express');
var Gun = require('Gun');
var app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));
var server = app.listen(port, () => console.log('Server started on port ' + port + ' with /gun'));
Gun({	
	file: 'data.json', 
	web: server 
});

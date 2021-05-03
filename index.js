const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/user', require('./routes/user'));

app.listen(5000, () => {
	console.log('port 5000');
});

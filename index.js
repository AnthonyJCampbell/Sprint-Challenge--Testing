const server = require('./api/server.js');

const port = PROCESS.ENV.PORT || 6666

server.listen(port, () => console.log(`\nserver up on port ${port}\n`)); 
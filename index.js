const server = require("./API/server");

const port = 6666;

server.listen(port, () => console.log(`\n *** server live on port ${port} *** \n`));

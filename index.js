const express = require('express');
const routerApiCalculadora = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());

routerApiCalculadora(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});

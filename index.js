const express = require('express');

cons app = express()

app.get('/teste', (req, res)  {
    return res.json({ hello: 'world alterado' })
});

app.listen(3333);
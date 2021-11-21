const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3500;
// const publicFolderPath= path.resolve(__dirname, '/public')
// app.use(express.static(publicFolderPath));
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(port, ()=> console.log(`Servidor corriendo ${port}`))






  
let fs = require('fs')
let express = require('express')
let app = express()

app.get('/',function (req,res) {
    res.render('index.html')
})
app.listen(80,function () {
    console.log('app is running')
})
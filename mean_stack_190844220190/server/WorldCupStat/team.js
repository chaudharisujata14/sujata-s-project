var express = require('express');
var app = express();
var mysql = require("mysql");
var config = require("config");

var connection = mysql.createConnection({
"host" : config.get('host'),
"user" : config.get('user'),
"password" : config.get('password'),
"database" : config.get('database')
});

connection.connect();

app.use(express.json());

app.get('/', (req, res) => {
    querytext =`select * from CricStatTB`;
    connection.query(querytext,(error,result) => {
        if(error == null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(error));
        }
    });
});

app.delete('/:venue', (req, res) => {
    var venue = req.params.venue;
    querytext =`delete from CricStatTB where venue = '${venue}'`;
    connection.query(querytext,(error,result) => {
        if(error == null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(error));
        }
    });
});


app.post('/', (req, res) => {
    var id = req.body.id;
    var country = req.body.country;
    var year = req.body.year;
    var noofteam = req.body.noofteam;
    var venue = req.body.venue;
    querytext =` insert into CricStatTB values(${id},"${country}",${year},${noofteam},"${venue}");
    `;
    connection.query(querytext,(error,result) => {
        if(error == null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(error));
        }
    });
});
module.exports =app;
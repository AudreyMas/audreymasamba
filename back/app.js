// je déclare l'ensemble des librairies nécessaires
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
let cors = require('cors');
const connection = require("./connexion/db");


// je configure l'application
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// app.use('/api',route);



//routes api
app.get('/', (req, res) => {
  res.send('go to /projects to see all projects ')
}
);

app.get('/projects', (req, res) => {
  connection.query('SELECT * from projects', (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  });
});

app.post('/projects/add', (req,res)=>{
  const {name,description, image_1} = req.query;
  const INSERT_PROJECT =`INSERT INTO projects (name, description, image_1) VALUE('${name}','${description}','${image_1}')`
  connection.query(INSERT_PROJECT, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send('successfully added')
    }
  });
});

app.delete('/projects/delete/:id', (req, res) => {
  // récupération des données envoyées
  const idEmployee = req.params.id;
  const {name} = req.query;

  // connexion à la base de données, et suppression de l'employé
  connection.query('DELETE FROM projects WHERE id = ?', [name], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Delete ERROR");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});


//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
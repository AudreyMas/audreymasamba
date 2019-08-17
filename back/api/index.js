// const express = require('express');
// const connection = require("../connexion/db");
// let route = express.Router();

// route.get('/', (req, res) => {
//   res.send('go to /projects to see all projects ')
// }
// );

// route.get('/projects', (req, res) => {
//   connection.query('SELECT * from projects', (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//       return res.json({
//         data: results
//       })
//     }
//   });
// });

// module.exports = route;
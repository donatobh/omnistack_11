const express = require('express');
cont cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

   /**
    * Bancos de dados:
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * 
    * Configurando DB: 
    * Driver: SELECT * FROM users
    * ou
    * Query Builder: table('users').select('*').where()
    */

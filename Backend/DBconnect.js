const mysql = require("mysql");


const my_db = mysql.createConnection({
  "host": "localhost",
  "port": 3306,
  "user": "root",
  "database": "admission",
});

my_db.connect((err) => {
  if (err) 
    console.log("Error Occured " + err);
  else  
    console.log("My-Sql connection is success ");
});

module.exports = my_db;

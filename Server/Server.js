const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

const mysqlconnection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.MYSQL_DB,
});

mysqlconnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE if not exists customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), phone VARCHAR(20),email VARCHAR(20),message VARCHAR(255))";
  mysqlconnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

app.post("/contact", (req, res) => {
  const jsondata = req.body;
  const name = jsondata["Name"];
  const phone = jsondata["Phone"];
  const email = jsondata["Email"];
  const message = jsondata["Message"];

  mysqlconnection.query(
    "INSERT INTO customers (name, phone, email, message) VALUES (?,?,?,?)",
    [name, phone, email, message],
    (err) => {
      if (err) res.send(err);
      if (!err) res.send("Insert succeded.");
    }
  );
});

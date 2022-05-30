const express = require('express');
const mysql = require('mysql');
const app = express();


app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({
  extended: true,
  limit: '500mb'
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "try",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/get', (req, res) => {
    con.query("SELECT name, id FROM info", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/login', (req, res) => {
  const U_Id = req.body.U_Id;
  const U_Password = req.body.U_Password;
  console.log(U_Id);
  let sql = `select U_Id, U_Password from users where U_Id = '${U_Id}' and U_Password = '${U_Password}'`;

  con.query(sql, function (err, result, fields) {
    if (err) throw err;

    if (result.length > 0)
      res.send(result);
    else
      res.send("Wrong Username or password!!");
  })
});

app.post('/compinsert', (req, res) => {
  console.log(req.body);

  let C_Id = req.body.C_Id;
  let C_category = req.body.C_category;
  let C_Issue = req.body.C_Issue;
  let C_Details = req.body.C_Details;
  let C_Time = req.body.C_Time;
  let C_Suspect = req.body.C_Suspect;
  let C_area = req.body.C_area;
  //let C_status = req.body.C_status ;

  let sql = `INSERT INTO complain (C_Id, C_category, C_Issue, C_Details, C_Time, C_Suspect, C_area,) VALUES('${C_Id}', '${C_category}', '${C_Issue}', '${C_Details}', '${C_Time}', '${C_Suspect}', '${C_area}')`;
  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    };
    console.log("1 record inserted");
    res.send("Done");
  });
});


app.post('/insert', (req, res) => {
  console.log(req.body);

  let U_Id = req.body.U_Id;
  let U_Password = req.body.U_Password;
  let U_Name = req.body.U_Name;
  let U_address = req.body.U_address;
  let U_email = req.body.U_email;
  let U_Phone = req.body.U_Phone;
  let U_Gender = req.body.U_Gender;


  let sql = `INSERT INTO users (U_Id, U_Password, U_Name, U_address, U_email, U_Phone, U_Gender) VALUES('${U_Id}', '${U_Password}', '${U_Name}', '${U_address }', '${U_email}', '${U_Phone}', '${U_Gender}')`;
  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    };
    console.log("1 record inserted");
    res.send("Done");
  });
});

app.post('/Alogin', (req, res) => {
  const A_Id = req.body.A_Id;
  const A_Password = req.body.A_Password;

  let sql = `select A_Id, A_Password from administrator where A_Id = '${A_Id}' and A_Password = '${A_Password}';`

  con.query(sql, function (err, result, fields) {
    if (err) throw err;

    if (result.length > 0)
      res.send(result);
    else
      res.send("Wrong Username or password!!");
  });
});
app.post('/GetAdminDetails', (req, res) => {
  console.log("Backend: GetAdminDetails called");
  //CREATE TABLE user (name VARCHAR(20), id VARCHAR(20), A_Id VARCHAR(20), A_Password VARCHAR(20), A_Name VARCHAR(20), A_address VARCHAR(20), A_email VARCHAR(20), A_Phone VARCHAR(20), A_Gender VARCHAR(20), A_specialization VARCHAR(20));
  //insert into user VALUES ('name_1','A01','A01','cdb4','shuvo','address_1','email_1','phone_1','gender_1','specialization_1');
  //CREATE TABLE adminstrator (name VARCHAR(20), id VARCHAR(20), A_Id VARCHAR(20), A_Password VARCHAR(20), A_Name VARCHAR(20), A_address VARCHAR(20), A_email VARCHAR(20), A_Phone VARCHAR(20), A_Gender VARCHAR(20), A_specialization VARCHAR(20));
  //insert into adminstrator VALUES ('name_1','A01','A01','cdb4','shuvo','address_1','email_1','phone_1','gender_1','specialization_1');
  const username = req.body.username;
  con.query(`select A_Id, A_Name,A_address,A_email,A_Phone,A_Gender,A_specialization from administrator where A_Id = '${username}'`, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



app.post('/GetUserDetails', (req, res) => {
  console.log("Backend: GetAdminDetails called");

  const username1 = req.body.username1;
  con.query(`select U_Id, U_Name,U_address,U_email,U_Phone,U_Gender from users where U_Id = '${username1}'`, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});




app.listen(5500, () => {
    console.log("Cholse");
});


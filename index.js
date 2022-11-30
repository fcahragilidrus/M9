const express =  require('express');
const bodyParser = require('body-paser');
const app = express ();
const mysql = require('mysql2');

//parse applicaton/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('mysql Connected...');
});

//tampilan semua data product
app.get('/api/products',(req, res) => {
    let sql = "SELECT * FROM product WHERE production_id="+req.params.dictionary;
    let query = conn.query(sql, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const mysql = require('mysql2');

//parse application/json

//tambahkan data produk baru
app.post('/api/products',(req,res)=>{
  let data = {product_name : req.body.product_name, product_price : req.body.product_price};
  let sql = " INSERT INTO product SET ?";
  let query = conn.query(sql,data,(err,result)=>
  {if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "Response":"update data success"}))
});
});
//edit data product berdasarkan id

app.put('/api/products/:id',(req,res)=>{
  let sql= "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"'WHERE product_id="+req.params.id;
  let query = conn.query(sql,(err, result) =>{
    if(err) throw err;
    res.send(JSON.stringify({"status":200,"error":null, "response": "update data success"}));

  });
});
//delete data product berdasarkan id
app delete('/api/product/:id',(req,res)=>{
  let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
  let query = conn.query(sql,(err,result)=>{
    if(err) throw err;
      res.send(JSON.stringify({"status":200,"error":null, "response":"Delete data success"}));
  });
});

//server listening
app.listen(3000,()=>{
  console.log('server started on port 3000...');
});

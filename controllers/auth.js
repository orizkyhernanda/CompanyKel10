const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

    const db = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database:'profilec'
    });

    exports.login = async function(req,res){
        console.log(req.body);
            const { username, password} = req.body;
            if (username && password) {
                db.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                    if (results.length > 0) {
                        req.body = username;
                        res.redirect('/user_index');
                        
                    } else {
                        res.send('Incorrect Username and/or Password!');
                    }			
                    res.end();
                });
            }
      }
    
    exports.contactform = (req, res) => {
    console.log(req.body);

    
    const { name, email, phone, message} = req.body;

    db.query('INSERT INTO cust SET ?', {name: name, email:email, phone:phone, message:message },function(error, results, fields){
   
       res.send('Pesan anda sudah kami terima');
       
})
    }

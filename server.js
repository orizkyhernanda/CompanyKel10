const express = require('express');
const mysql = require('mysql');
//const dotenv = require('dotenv');
const path = require('path');
const hbs = require('hbs');
//const fs = require('fs');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();



const db = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database:'profilec'
//    host: process.env.DATABASE_HOST,
//    user: process.env.DATABASE_USER,
//    password: process.env.DATABASE_PASSWORD,
//    database: process.env.DATABASE
});

db.connect( (error) => {
if (error) {
    console.log(error)
}
else {
    console.log("Mysql Connect")
}
})
app.set('views',path.join(__dirname,'views'));
			
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


//index fetch data tentang kami
app.get('/', (req, res) => {
  let sql = "SELECT * FROM tentang_kami";
  db.query(sql, (error, about) => {
    if(error) throw error;
    res.render('index',{
      about: about
  });
  });
});

//index fetch data produk/servis
app.get('/produk', (req, res) => {
  let sql = "SELECT * FROM post_produk";
  db.query(sql, (error, posts) => {
    if(error) throw error;
    res.render('produk',{
      posts: posts
    
  });
  });
});

//index fetch data team
app.get('/teams', (req, res) => {
  let sql = "SELECT * FROM tim";
  db.query(sql, (error, results) => {
    if(error) throw error;
    res.render('teams',{
      results: results
    });
    });
});

//index fetch data kontak
app.get('/contactform', (req, res) => {
    res.render('contactform');
});

//login
app.get('/login', (req, res) => {
    res.render('login');
});

//admin about
app.get('/about', (req, res) => {
  let sql = "SELECT * FROM tentang_kami";
  db.query(sql, (error, results) => {
    if(error) throw error;
    res.render('about',{
      results: results
    });
    });
});


//admin about crud save

app.post('/save/about',(req, res) => {
  let data = {judul_post: req.body.judul_post, post: req.body.post};
  let sql = "INSERT INTO tentang_kami SET ?";
  db.query(sql, data,(error, results) => {
    if(error) throw error;
    res.redirect('/about');
  });
});

//admin about crud update

app.post('/update/about',(req, res) => {
  let sql = "UPDATE tentang_kami SET judul_post='"+req.body.judul_post+"', post='"+req.body.post+"' WHERE id_judul="+req.body.id;
  db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/about');
  });
});

//admin about crud delete
app.post('/delete/about',(req, res) => {
  let sql = "DELETE FROM tentang_kami WHERE id_judul="+req.body.id_judul+"";
  db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/about');
  });
});

//admin contact

app.get('/contact', (req, res) => {
  let sql = "SELECT * FROM cust";
  db.query(sql, (error, results) => {
    if(error) throw error;
    res.render('contact',{
      results: results
    });
    });
});

//admin contact crud delete

app.post('/delete/contact',(req, res) => {
  let sql = "DELETE FROM cust WHERE id_contact="+req.body.id_contact+"";
  db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/contact');
  });
});

//admin users

app.get('/users',(req, res) => {
  let sql = "SELECT * FROM admin";
  db.query(sql, (error, results) => {
    if(error) throw error;
    res.render('users',{
      results: results
    });
    });
  });

//admin users crud save

  app.post('/save',(req, res) => {
    let data = {username: req.body.username, password: req.body.password};
    let sql = "INSERT INTO admin SET ?";
    db.query(sql, data,(error, results) => {
      if(error) throw error;
      res.redirect('/users');
    });
  });

//admin users crud update

  app.post('/update',(req, res) => {
    let sql = "UPDATE admin SET username='"+req.body.username+"', password='"+req.body.password+"' WHERE admin_id="+req.body.id;
    db.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/users');
    });
  });
  
 //admin users crud delete
  app.post('/delete',(req, res) => {
    let sql = "DELETE FROM admin WHERE admin_id="+req.body.admin_id+"";
    db.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/users');
    });
  });
  
//admin posts

app.get('/posts',(req, res) => {
    let sql = "SELECT * FROM post_produk";
    db.query(sql, (error, results) => {
      if(error) throw error;
      res.render('posts',{
        results: results
      });
      });
    });

//admin posts crud save

app.post('/save/posts',(req, res) => {
      let data = {judul: req.body.judul, posting: req.body.posting};
      let sql = "INSERT INTO post_produk SET ?";
      db.query(sql, data,(error, results) => {
        if(error) throw error;
        res.redirect('/posts');
      });
    });

//admin posts crud update

app.post('/update/posts',(req, res) => {
      let sql = "UPDATE post_produk SET judul='"+req.body.judul+"', posting='"+req.body.posting+"' WHERE id_post="+req.body.id;
      db.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/posts');
      });
    });

//admin posts crud posts

app.post('/delete/posts',(req, res) => {
      let sql = "DELETE FROM post_produk WHERE id_post="+req.body.id_post+"";
      db.query(sql, (err, results) => {
        if(err) throw err;
          res.redirect('/posts');
      });
    });

app.get('/user_index',(req, res) => {
    db.query('SELECT * FROM admin')
        
        res.render('user_index');
});

//admin team
app.get('/team',(req, res) => {
  let sql = "SELECT * FROM tim";
  db.query(sql, (error, results) => {
    if(error) throw error;
    res.render('team',{
      results: results
    });
    });
});

//app.get('/home', function(req, res) {
//	if (req.body) {
//		res.send('Welcome back, ' + '!');
//	} else {
//		res.send('Please login to view this page!');
//	}
//	res.end();
//});

//admin team crud save

app.post('/save/team',(req, res) => {
  let data = {nama: req.body.nama, tugas: req.body.tugas, photo: req.body.photo};
  let sql = "INSERT INTO tim SET ?";
  db.query(sql, data,(error, results) => {
    if(error) throw error;
    res.redirect('/team');
  });
});

//admin team crud update

app.post('/update/team',(req, res) => {
  let sql = "UPDATE tim SET nama='"+req.body.nama+"', tugas='"+req.body.tugas+"' WHERE id_tim="+req.body.id;
  db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/team');
  });
});

//admin team crud delete
app.post('/delete/team',(req, res) => {
  let sql = "DELETE FROM tim WHERE id_tim="+req.body.id_tim+"";
  db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/team');
  });
});



app.listen(3000, function(){
    console.log('Listening port 3000');
});

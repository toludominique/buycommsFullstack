
import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import multer from 'multer';
import path from 'path';



const app = express()

app.listen(8800, () => {
    console.log('connected to backend!')
})

//middleware

 app.use(express.json())
 app.use(cors())
 app.use(express.static('images'))


 const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'images')
   },
   filename: (req, file, cb) => {
      console.log(file)
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
   }
 })


 const upload = multer({
   storage: storage,
 })


 app.get("/", (req,res) => {
    res.json("hello this is the new backend")
 })

 app.get("/popularproducts", (req,res) => {
   const q = "SELECT * FROM producttable"

   db.query(q, (err,data) => {
      if(err) return res.json(err)
      return res.json(data)
   })
   
 });

 app.get("/popularproducts/:id", (req,res) => {

   const { id } = req.params

   const q = "SELECT * FROM producttable WHERE id = ?"

   db.query(q, [id], (err,data) => {
      if(err) return res.json(err)
      return res.json(data)
   })
   
 });

 app.post("/addProduct", upload.single('image'), (req,res) => {

   const q = "INSERT INTO producttable (`name`, `category`, `desc`, `price`,`image`, `amount`) VALUES (?)"
 
   const values = [
      req.body.name,
      req.body.category,
      req.body.desc,
      req.body.price,
      req.file.filename,
      req.body.amount,
     
     
   ]
   console.log(req.file)
 
   

   db.query(q, [values], (err, data) => {
      if(err) return res.json(err)
      return res.json("Product successfully added!")
   })

  
 })



 const db = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
 })


/*  export async function getServerSideProps() {

   const password = process.env.DATABASE_PASSWORD
   console.log(`${password}`)
 } */
import clientapi from  "../backEnd/api/axiosfile.js"


const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const password = process.env.PASSWORD;
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'college',
})

app.get('/register', (req,res)=>{
const sql = "INSERT INTO login (username,email, password) VALUES (?)"
const values = [
    req.body.name,
    req.body.email,
    req.body.password
]
db.query(sql, [values],(err,data)=>{
    if(err){
        return err.json("Error")

    }
    return res.json(data)
})

})




app.listen(8000,() => {
    console.log('listening on 8000');
});
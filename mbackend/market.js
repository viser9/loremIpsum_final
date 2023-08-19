const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


let COURSES = [];

// Read data from file, or initialize to empty array if file does not exist
try {
    COURSES = JSON.parse(fs.readFileSync('./mark.json', 'utf8'));
} catch (error){
    console.log('file fetch error',error);
}
console.log(COURSES);

app.get('/admin/courses', (req, res) => {
  res.json({ courses: COURSES });
});

app.get('/users/courses',(req, res) => {
  res.json({ courses: COURSES });
});

app.get('/admin/me',(req,res) =>{  
  res.json({
    username : req.user.username
  });
})


app.listen(3000, () => console.log('Server running on port 3000'));

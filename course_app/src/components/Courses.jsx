import { Box, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Navigate } from 'react-router-dom';

import { useEffect,useState } from 'react';
export default function Courses(){
    
    const [courses,setCourse] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCourse(data.courses);
        })
    },[])
    return <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {courses.map((course)=>{
            return<Course course={course} courses={courses} setCourse={setCourse}/>
        })}
    </div>
}

export function Course(props){
    function handleClick(event){
        const courseId = event.target.getAttribute("data-id");
        console.log(courseId);
        window.location.href = "/courses/"+courseId;
    }

    return <Card style={{
        margin:30,
        width:400,
        height:480,
    }}
    >
        <Typography textAlign={"center"} variant='h5'>{(props.course.title).toUpperCase()}</Typography>
        <Typography textAlign={"center"}>{props.course.description}</Typography>
        <Card style={{width:400,height:250}}>
        <img src={props.course.imageLink} style={{width:"100%",height:"100%",objectFit:"cover",alignContent:"center"}}alt="course" />
        </Card>
        <Typography textAlign={"center"}>{props.course.price}</Typography>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Button variant='contained' 
                data-id= {props.course.id}
                size='small' 
                style={{marginRight:'15px'}}
                onClick={handleClick}
            > Visit Seller
            </Button>
        </div>
    </Card>
}
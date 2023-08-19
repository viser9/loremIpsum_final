import { Button, Card, TextField, Typography } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from "react";
import { useNavigate } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignupCard(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);

    const navigate = useNavigate()

    const handleClick = () => {
        setOpen(true);
    };

    const handleAlertClick = () => {
        setAlertOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setAlertOpen(false);
    };

    const handleSubmit = () => {
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body:JSON.stringify({
                username:email,
                password:password,
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(res=>{
                if(!res.ok)
                    {handleAlertClick()}
                return res.json()
            })
            .then(data=>{
                if(data.token){
                    handleClick();
                    navigate('/courses');
                    window.location.reload();
                }
                setEmail('');
                setPassword('');
                localStorage.setItem("token",data.token)  
            })
    }

    return(
        <div >
            <div style={{
                paddingTop:100,
                display:"flex",
                justifyContent:"center",
            }}>
                <Typography variant="h6" component="div">
                    Welcome to Market. 
                    Signup to Begin
                </Typography>
            </div><br/>
            
            <div style={{display:"flex",justifyContent:"center"}}>
                <Card variant={"outlined"}style={{display:"flex",flexDirection:"column",width:300,padding:20,paddingBlock:50,alignItems:'center'}}>
                    <TextField 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"  
                    />
                    <br/><br/>
                    <TextField 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                    />
                    <br/><br/>  
                    <Button 
                        size="large" 
                        variant="contained" 
                        onClick={handleSubmit}
                    >
                        Signup
                    </Button>
                    
                </Card>    
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="outlined" severity="success" sx={{ width: '100%' }}>
                Signed in successfully!
            </Alert>
            </Snackbar>

            <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="outlined" severity="error" sx={{ width: '100%' }}>
                User already exists!
            </Alert>
            </Snackbar>
                
            
        </div>
    )
}
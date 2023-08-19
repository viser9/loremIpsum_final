import AppBar from '@mui/material/AppBar';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
function Appbar(){
  const navigate = useNavigate()

    return(
      <AppBar position="static" sx={{flexGrow:4,backgroundColor:'gray'}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {/* <Typography variant="h6" component="div" style={{margin:3,marginLeft:10}} sx={{flexGrow:1}}>
          MARKET
        </Typography> */}
        <a href='/'><img src="data:image/png;base64,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"  component="div" style={{ width: 100, height: 30,margin:3,marginLeft:10 }} alt="Image" sx={{flexGrow:1}} /></a>
        <div>
        <Button 
          color="inherit"
          onClick={()=>{
            navigate('/addcourses')
          }}
        >
          Add Location
        </Button>
        <Button 
          color="inherit"
          onClick={()=>{
            navigate('/courses')
          }}
        >
          Visit
        </Button>
        </div>
        
      </div>
    </AppBar>
    
    )
  
}

export default Appbar
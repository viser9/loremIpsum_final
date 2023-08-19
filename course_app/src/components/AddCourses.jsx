import { Button, Card, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export default function AddCourses(){
    const handleClick = () =>{
            alert("Thank you for the submission");
            window.location.href = "/courses";
    }

    return(
        <div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                paddingTop:100,
            }}>
                <Typography variant="h6" component="div">
                    INTRODUCE A NEW SELLER TO THE MARKET
                </Typography>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Card variant="outlined" style={{display:"flex",flexDirection:"column",padding:20,paddingBlock:20,paddingBottom:20,paddingInlineEnd:20,width:300}}>

                        <TextField
                            onChange={(e)=>{setTitle(e.target.value)}}
                            label="Seller Name"
                        /><br />
                        <TextField
                            onChange={(e)=>{setDescription(e.target.value)}}
                            label="Seller Address"
                        /><br />
                        <TextField
                            onChange={(e)=>{setImage(e.target.value)}}
                            label="Product Image"
                        /><br />
                        <TextField
                            onChange={(e)=>{setPrice(e.target.value)}}
                            label="Price Range of Products"
                        /><br />
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={handleClick}
                        >
                            Add Product
                        </Button>
  
                </Card> 
            </div>
        </div>
        
    )
}
import React from "react";
import { BottomNavigationAction } from "@mui/material";
import { BottomNavigation } from "@mui/material";  
import RestoreIcon from '@mui/icons-material/Restore';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

export default function Bottomnav(){
    return(
        <div style={{position:'absolute',bottom:0,left:0,right:0,textAlign:'center'}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <BottomNavigation>
                <div><BottomNavigationAction label="Recents" icon={<RestoreIcon />} /></div>
                <div><BottomNavigationAction label="Favorites" icon={<AppleIcon />} /></div>
                <div><BottomNavigationAction label="Location" icon={<AndroidIcon />} /></div>
            </BottomNavigation>
            </div>
        </div>
            

    )
}
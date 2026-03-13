import Box from '@mui/material/Box';
import AppBarComp from "../AppBarComp/AppBarComp.tsx";
import {useState} from "react";
import SideBarComp from "../SideBarComponent/SideBarComp.tsx";
import { Outlet } from "react-router-dom";

const LayoutComp = () => {

    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <Box sx = {{display: "flex", flexDirection: "column", height: "100vh"}} >
            
            <Box sx={{flex: 7, display:"flex"}}>
                <AppBarComp open={open} setOpen={setOpen}></AppBarComp>
            </Box>
            
            <Box sx={{flex: 93, display: "flex"}}>
                                   
                <SideBarComp open={open} ></SideBarComp>
                <Box color="black" sx={{flex: 85,  backgroundColor: "white", p: 2, }}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
};

export default LayoutComp;

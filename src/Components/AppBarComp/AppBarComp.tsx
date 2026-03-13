import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import type {Dispatch, SetStateAction} from "react";
import {Avatar, Divider} from "@mui/material";
import ProfilePic from "../../assets/ProfilePic.jpg";

interface AppBarCompProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const AppBarComp = ({open, setOpen}: AppBarCompProps) => {
    return (
        <Box flexGrow={1}>
            <AppBar sx={{backgroundColor: "#212121"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {setOpen(!open)}}
                    >
                    <MenuIcon />
                    </IconButton>
                    
                    
                    <Avatar alt="Remy Sharp" src={ProfilePic} />
                    
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2,  borderColor: "white" }} />
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Noé Zapata Martínez - Software Engineer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppBarComp;
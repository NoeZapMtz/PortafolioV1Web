import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {type CSSObject, styled, type Theme} from "@mui/material";
import {LeftMenuIconComp} from "../LeftMenuIcon/LeftMenuIconComp.tsx";

const openedMixin = (theme: Theme): CSSObject => ({
    width: "fit-content",
    maxWidth: "100%",
    transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
    width: `65px`,
    transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden"
});

const DrawerStyled = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open"
})<{ open?: boolean }>(({ theme, open }) => ({
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

interface SideBarComProps {
    open: boolean;
}
const SideBarComp= ({open}: SideBarComProps) => {
    
    return (
        <DrawerStyled
            variant="permanent"
            open={open}
            color="inherit"
            sx={{
                "& .MuiDrawer-paper": {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    position: "relative",
                    overflowX: "hidden",
                },
            }}
        >
            <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <LeftMenuIconComp icon={<AccountBoxIcon/>} text="Experience" showText={open} />
            </Box>
        </DrawerStyled>
    );
}

export default SideBarComp;


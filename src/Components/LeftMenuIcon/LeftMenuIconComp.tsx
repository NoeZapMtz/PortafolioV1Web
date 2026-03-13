import type {ReactNode} from "react";
import { Box, Typography } from "@mui/material";

interface LeftMenuIconCompProps {
    icon: ReactNode;
    text: string;
    showText: boolean;
}

export const LeftMenuIconComp = ({ icon, text, showText }: LeftMenuIconCompProps) => {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            {icon}
            {showText && <Typography>{text}</Typography>}
        </Box>
    );
};
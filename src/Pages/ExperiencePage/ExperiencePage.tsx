import Box from "@mui/material/Box";

export const ExperiencePage = () => {
    return (
        <Box display={"flex"} flexDirection={"column"} height={"100%"}>

            <Box flexGrow={1} display={"flex"}>
                <Box sx={{ border: "2px solid red" }} flexGrow={1}></Box>
                <Box sx={{ border: "2px solid blue" }} flexGrow={1}></Box>
            </Box>
            <Box flexGrow={1} display={"flex"}>
                <Box sx={{ border: "2px solid green" }} flexGrow={1}></Box>
                <Box sx={{ border: "2px solid purple" }} flexGrow={1}></Box>
            </Box>
            
        </Box>
    );
}
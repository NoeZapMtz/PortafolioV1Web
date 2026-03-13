import Box from "@mui/material/Box";
import ImageAndButtonCardComp from "../../Components/ImageAndButtonCardComp/ImageAndButtonCardComp.tsx";

export const ExperiencePage = () => {
    return (
        <Box display={"flex"} flexDirection={"column"} height={"100%"} width={"100%"}>

            <Box flex={1} display={"flex"}>
                <Box sx={{ border: "2px solid red" }} flex={1} minWidth={"0"} display={"flex"}>
                    <ImageAndButtonCardComp/>
                </Box>
                <Box sx={{ border: "2px solid blue" }} flex={1} minWidth={"0"}></Box>
            </Box>
            <Box flex={1} display={"flex"}>
                <Box sx={{ border: "2px solid green" }} flex={1} minWidth={"0"}></Box>
                <Box sx={{ border: "2px solid purple" }} flex={1} minWidth={"0"}></Box>
            </Box>
            
        </Box>
    );
}
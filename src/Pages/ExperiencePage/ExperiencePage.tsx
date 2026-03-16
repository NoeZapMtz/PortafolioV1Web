import Box from "@mui/material/Box";
import {ProfessionalSummary} from "./ProfessionalSummary.tsx";
import {WorkExperience} from "./WorkExperience.tsx";
import {ContactInfo} from "./ContactInfo.tsx";

export const ExperiencePage = () => {
    return (
        <Box display={"flex"} height={"100%"} width={"100%"}>

            <Box flex={5} display={"flex"} flexDirection={"column"} minHeight={0}>
                
                <Box flex={2} display={"flex"} minHeight={0} m={1}>
                    
                    <Box flex={2} mx={1}>
                        <ProfessionalSummary/>
                    </Box>
                    
                    <Box flex={1} minHeight={0} mx={1}>
                        <ContactInfo/>
                    </Box>
                    
                </Box>
                
                <Box flex={4} my={1} mx={2}>
                    <WorkExperience />
                </Box>
                
            </Box>
            
            <Box flex={2} display={"flex"}>
                
            </Box>
            
        </Box>
    );
}
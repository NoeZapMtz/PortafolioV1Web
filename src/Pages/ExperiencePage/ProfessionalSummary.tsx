import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardHeader} from "@mui/material";

export const ProfessionalSummary = () => {
    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
            pt: 1
        }}>
            <CardHeader
                title={
                    <Typography variant="h5" textAlign="center">
                        Professional Summary
                    </Typography>
                }
                sx = {{ px:0, py:3, m:0 }}
            />
            <CardContent sx={{flexGrow: 1, px: 4}}>
                <Typography textAlign={"justify"} variant="body1" sx={{ color: 'text.primary' }}>
                    As a Technical Lead, I have managed teams of 6 to 8 developers focused on
                    developing APIs in .NET. My main responsibilities included receiving client
                    requirements, analyzing and estimating them, prioritizing tasks, assign
                    activities based on team members' skills and experience level, reviewing
                    deliverables, and deploying through CI/CD pipelines from development to QA
                    and to production.
                </Typography>
            </CardContent>
        </Card>
    );
}
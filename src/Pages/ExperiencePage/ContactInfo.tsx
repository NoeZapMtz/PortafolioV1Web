import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardHeader, Link} from "@mui/material";

export const ContactInfo = () => {
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
                        Contact Information
                    </Typography>
                }
                sx = {{ px:0, pt:3, m:0 }}
            />
            <CardContent sx={{flexGrow: 1, overflow: "auto", minHeight: 0}}>
                <Typography textAlign={"left"} sx={{ paddingLeft:"12%" }}>
                    <ul>
                        <li> <Typography> <strong>Phone:</strong> 4921143525 </Typography> </li>
                        <li> <Typography> <strong>Email:</strong> Noezapma@gmail.com </Typography> </li>
                        <li> <Typography>  <strong>Linkedin </strong>
                            <Link
                                href="https://www.linkedin.com/in/noe-zapata-57b44817b/"
                                target="_blank"
                                underline="hover"
                                color="primary"
                            >
                                Noé Zapata Martínez
                            </Link></Typography> 
                        </li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    );
}
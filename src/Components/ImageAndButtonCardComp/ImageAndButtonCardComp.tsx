import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImageAndButtonCardComp= () => {
    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1}} >
            <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="div">
                    Main Experience
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    As a Technical Lead, I have managed teams of 6 to 8 developers focused on
                    developing APIs in .NET. My main responsibilities included receiving client
                    requirements, analyzing and estimating them, prioritizing tasks, assign
                    activities based on team members' skills and experience level, reviewing
                    deliverables, and deploying through CI/CD pipelines from development to QA
                    and to production.
                    
                    More than 20 APIs developed in .Net 7, using CQRS, DDD, Dapper, SQL
                    Server, HTPP, Hosted Services, JMS publishers and listeners, Octopus,
                    Github, Jira, CI/CD and Sonnar. Everything is under a scrum agile
                    methodology with releases and deploys every 40 days.

                    Full stack web developer mainly worked with applications based in
                    .NetCore in MVC hosted in Azure environment OR IIS Server, with
                    Databases on SQL Server 2019/2012 or Azure SQL.
                    ● Data Base Migration from SQL Server 2008 to Azure SQL: as developer,
                    I manage the analysis about existent Data Base on SQL Server 2008
                    (Tables, stores, functions, types, user permissions and data) and Web
                    Application in IIS, to migrate to an environment of Azure, transformations
                    from ETL to Data Factory pipelines from Azure, IIS to Azure WebAPP and
                    SQLServer 2008 to AzureSQL.
                </Typography>
            </CardContent>
            <CardActions sx={{flexGrow: 1}}>
                <Button
                    size="small"
                    href="https://www.linkedin.com/in/noe-zapata-57b44817b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin Profile
                </Button>
            </CardActions>
        </Card>
    );
};

export default ImageAndButtonCardComp;
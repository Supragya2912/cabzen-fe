import { Card, Typography, CardContent, Grid } from '@mui/material';
import Layout from '../components/Layout';


const fetchData = async () => {
    try {
        const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDljYWVmNGQ4OWM2NzcyN2JjODJjYyIsImlhdCI6MTcxMTYxMTA0NywiZXhwIjoxNzExNjk3NDQ3fQ.ctZ5_QjtaGK7_ySK1Mo5x3fC5fN6nJD5vv1GIZnHP4o'; // Your access token

        const response = await fetch('http://localhost:8080/cabzen/listAllCabs', {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken 
            },
            body: JSON.stringify({
                page: 1
            })
        });

        console.log("RESPONSE", response);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


const  Cabs = async () => {

    const cabs = await fetchData();
    console.log("CABS" , cabs);
    return (
   <Layout>
        <Grid container spacing={3}>
            {cabs?.data?.map((cab) => (
                <Grid item key={cab._id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {cab.brand} {cab.model}
                            </Typography>
                            <Typography color="textSecondary">
                                License Plate: {cab.licensePlate}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {cab.status}
                            </Typography>
                        
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </Layout>
    );
}

export default Cabs;



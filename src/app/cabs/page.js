import { Card, Typography, CardContent, Grid } from '@mui/material';
import Layout from '../components/Layout';
import { cookies } from 'next/headers';
import SearchBar from '../components/SearchBar';

const fetchData = async () => {

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken').value;

    try {
        const response = await fetch('http://localhost:8080/cabzen/listAllCabs', {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                page: 1
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};



const Cabs = async () => {

    const cabs = await fetchData();

    const handleSearch = (searchQuery) => {
        const filtered = cabs.filter(cab =>
            cab.brand.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCabs(filtered);
    };
    

    return (
        <Layout>


            <div style={{
                height: '100vh',
                backgroundColor: '#EAEAEA'
            }}>
                <Grid container spacing={4} justifyContent="flex-start">

                    <Grid item xs={4} sm={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h6'>Cabs</Typography>
                        <SearchBar onSearch={handleSearch}/>
                    </Grid>


                </Grid>

                <Grid container spacing={4} justifyContent="flex-start" sx={{ marginTop: 5 }}>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        {cabs?.data?.map((cab) => (

                            <div style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderRadius: 10,
                                boxShadow: '0px 0px 10px 0px rgba(255, 165, 0, 0.3)',
                                width: '70%',
                                maxWidth: 600,
                                position: 'relative'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography style={{ fontSize: '1.5rem' }}>{cab.brand.name} {cab.model}</Typography>
                                    <Typography
                                        style={{
                                            fontSize: '1.0rem',
                                            color: cab.status === 'booked' ? 'green' : cab.status === 'active' ? 'blue' : cab.status === 'inactive' ? 'red' : 'inherit'
                                        }}
                                    >
                                        {cab.status === 'booked' ? 'Booked' : cab.status === 'active' ? 'Active' : 'Inactive'}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="subtitle2" style={{ color: 'gray', marginBottom: 5 }} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>License Plate: {cab.licensePlate}</Typography>
                                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem', marginTop: 10 } }}>Driver Details</Typography>
                                    <Typography variant="subtitle2" style={{ color: 'gray' }} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Name: {cab.driver.fullName}</Typography>
                                    <Typography variant="subtitle2" style={{ color: 'gray', marginBottom: 5 }} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Phone: {cab.driver.phone}</Typography>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Grid>

            </div>
        </Layout>
    );
}

export default Cabs;

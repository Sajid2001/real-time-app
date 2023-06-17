import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';

import { useState } from 'react';
import NewsCard from '../Components/NewsCard';
import TempChart from '../Components/TempChart';
import AirChart from '../Components/AirChart';

const Homepage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [snapshotData, setSnapshotData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${process.env.REACT_APP_API_QUERY_URL}=${encodeURIComponent(searchTerm)}`)
        .then(result => {
          console.log(result.data);
          setSnapshotData(result.data);
        })
        .catch(err => {
          console.log(err);
        })
      };


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Get a Snapshot
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={searchTerm}
              onChange={e => {setSearchTerm(e.target.value)}}
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="Search for a location"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get Snapshot
            </Button>
          </Box>
        </Box>
        </Container>

        <Container component="main" maxWidth="lg">

          {snapshotData && snapshotData.weatherData &&
          <Typography fontWeight={'bold'} textAlign={'center'} marginY={3} variant='h2'>Snapshot Weather</Typography>
          }

          {snapshotData && snapshotData.weatherData &&
          <>
            <Typography marginY={3} variant='h4'>Temperature Data</Typography>
            <TempChart tempData = {snapshotData.weatherData.hourly_temp}/>
          </>
          }

          {snapshotData && snapshotData.weatherData &&
          <>
            <Typography marginY={3} variant='h4'>Air Quality Data</Typography>
            <AirChart airData = {snapshotData.weatherData.hourly_air}/>
          </>
          }

          {snapshotData && 
          <>
            <Typography fontWeight={'bold'} margin={5} textAlign={'center'} gutterBottom variant="h2" component="div">
              Snapshot News
            </Typography>
            <Grid container spacing={2} margin={2}>
              {snapshotData.articles.map(article => (
                <Grid item md={4}>
                  <NewsCard article = {article}/>
                </Grid>
              ))}
            </Grid>
          </>
          }
        
        
        </Container>

      
    </div>
  )
}

export default Homepage
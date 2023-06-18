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

  const font = "'Kanit', sans-serif"

  const [searchTerm, setSearchTerm] = useState('');
  const [snapshotData, setSnapshotData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_QUERY_URL}=${encodeURIComponent(searchTerm)}`)
        .then(result => {
          console.log(result.data);
          setSnapshotData(result.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setError(err)
          setLoading(false);
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
          <Typography component="h1" variant="h4" fontFamily={font}>
            Get a Snapshot
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={searchTerm}
              onChange={e => {setSearchTerm(e.target.value)}}
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="Learn everything about your city"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Capture Snapshot
            </Button>
          </Box>
          {loading && <Typography variant='body2'>Loading...</Typography>}
          {error && <Typography variant='body2' color={'red'}>Invalid Search</Typography>}
        </Box>
        </Container>

        <Container component="main" maxWidth="lg">

          {snapshotData && 
            <Typography marginY={6} fontWeight={'regular'} fontFamily={font}  textAlign={'center'} variant='h2' >{snapshotData.city}</Typography>
          }

          {snapshotData &&
          <Typography fontWeight={'light'} fontFamily={font} textAlign={'center'} marginY={3} variant='h3'>Snapshot Weather</Typography>
          }

          {snapshotData &&
          <>
            <Typography padding={2} fontFamily={font} marginY={3} variant='h4'>Temperature Data - Past And Future 7 Days</Typography>
            <TempChart tempData = {snapshotData.weatherData.hourly_temp}/>
          </>
          }

          {snapshotData &&
          <>
            <Typography padding={2}  fontFamily={font} marginY={3} variant='h4'>Air Quality Data - Past And Future 7 Days</Typography>
            <AirChart airData = {snapshotData.weatherData.hourly_air}/>
          </>
          }

          {snapshotData && 
          <>
            <Typography fontWeight={'light'} fontFamily={font} margin={6} textAlign={'center'} gutterBottom variant="h3" component="div">
              Snapshot News
            </Typography>
            <Grid container
             spacing={3} 
             marginY={5}>
              {snapshotData.articles.map(article => (
                <Grid key={article._id} item sm={12} md={4}>
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
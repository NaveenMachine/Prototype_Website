import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Grid
      container
      component="footer"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        backgroundColor: '#121212',
        color: 'white',
        py: 3,
        px: 2,
        textAlign: 'center',
      }}
    >
     
      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Naveen Kamath. All rights reserved.
      </Typography>
    </Grid>
  );
}

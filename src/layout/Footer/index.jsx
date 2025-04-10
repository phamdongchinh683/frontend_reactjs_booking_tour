import {
 Email,
 Facebook,
 GitHub,
 Instagram,
 Phone
} from '@mui/icons-material';
import {
 Box,
 Container,
 Divider,
 Grid,
 Link,
 Typography,
} from '@mui/material';
import React from 'react';

const Footer = () => {
 return (
  <Box
   sx={{
    backgroundColor: '#1976d2',
    color: '#fff',
    pt: 6,
    pb: 4,
    mt: 8,
   }}
  >
   <Container maxWidth="lg">
    <Grid container spacing={4}>
     {/* Company Overview */}
     <Grid item xs={12} md={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
       Wanderlust Travel
      </Typography>
      <Typography variant="body2" sx={{ color: '#ddd' }}>
       Discover breathtaking destinations, curated tours, and unforgettable travel experiences. We’re passionate about helping you explore the world with ease and joy.
      </Typography>
     </Grid>

     {/* Quick Links */}
     <Grid item xs={12} sm={6} md={2}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
       Quick Links
      </Typography>
      <Box display="flex" flexDirection="column" gap={1}>
       <Link href="/" underline="hover" color="inherit">Home</Link>
       <Link href="/tour" underline="hover" color="inherit">Tours</Link>
       <Link href="/about" underline="hover" color="inherit">About Us</Link>
       <Link href="/contact" underline="hover" color="inherit">Contact</Link>
       <Link href="/faq" underline="hover" color="inherit">FAQ</Link>
      </Box>
     </Grid>

     {/* Travel Resources */}
     <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
       Travel Resources
      </Typography>
      <Box display="flex" flexDirection="column" gap={1}>
       <Link href="/blog" underline="hover" color="inherit">Travel Blog</Link>
       <Link href="/guides" underline="hover" color="inherit">Destination Guides</Link>
       <Link href="/terms" underline="hover" color="inherit">Terms of Service</Link>
       <Link href="/privacy" underline="hover" color="inherit">Privacy Policy</Link>
      </Box>
     </Grid>

     <Grid item xs={12} md={3}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
       Contact Us
      </Typography>
      <Box display="flex" alignItems="center" mb={1}>
       <Email sx={{ mr: 1 }} />
       <Typography variant="body2">dchinh6803@gmail.com</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
       <Phone sx={{ mr: 1 }} />
       <Typography variant="body2">+84 772 573 366</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
       <GitHub sx={{ mr: 1 }} />
       <Link
        href="github.com/phamdongchinh683"
        target="_blank"
        rel="noopener"
        color="inherit"
        underline="hover"
       >
        GitHub
       </Link>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
       <Facebook sx={{ mr: 1 }} />
       <Link
        href="www.facebook.com/vegetarian2003"
        target="_blank"
        rel="noopener"
        color="inherit"
        underline="hover"
       >
        Facebook
       </Link>
      </Box>
      <Box display="flex" alignItems="center">
       <Instagram sx={{ mr: 1 }} />
       <Link href="#" color="inherit" underline="hover">
        Instagram
       </Link>
      </Box>
     </Grid>
    </Grid>

    <Divider sx={{ backgroundColor: '#ccc', my: 4 }} />

    <Box textAlign="center">
     <Typography variant="body2" sx={{ color: '#ccc' }}>
      &copy; {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
     </Typography>
    </Box>
   </Container>
  </Box>
 );
};

export default Footer;

import { Card, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import BookingForm from './Components/BookingForm';

const BookTour = () => {
 return (
  <Container maxWidth="md" sx={{ mt: 6 }}>
   <Card sx={{ p: 4, borderRadius: 4, boxShadow: 6 }}>
    <Typography variant="h4" fontWeight="bold" mb={1}>
     Book This Tour
    </Typography>
    <Divider sx={{ mb: 3 }} />
    <BookingForm />
   </Card>
  </Container>
 );
};

export default BookTour;

import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GradientCircularProgress from '../../components/GradientCircularProgress';
import { AuthService } from '../../services';

const Booked = () => {
 const [bookings, setBookings] = useState([]);
 const { myBooked } = AuthService();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchBookings = async () => {
   try {
    setLoading(true);
    const res = await myBooked();
    if (res.data.status === 'success') {
     setBookings(res.data.data);
    }
   } catch (error) {
   } finally {
    setLoading(false);
   }
  };

  fetchBookings();
 }, []);

 return (
  <Box p={4}>
   <Typography variant="h4" fontWeight="bold" gutterBottom>
    Booked History
   </Typography>

   {loading ? (
    <Box mt={4} textAlign="center">
     <GradientCircularProgress />
    </Box>
   ) : (
    <Grid container spacing={3}>
     {bookings.map((booking) => (
      <Grid item xs={12} md={6} lg={4} key={booking._id}>
       <Card
        sx={{
         borderRadius: 3,
         boxShadow: 4,
         transition: '0.3s',
         '&:hover': { boxShadow: 6, transform: 'scale(1.02)' },
        }}
       >
        <CardContent>
         <Typography variant="h6" gutterBottom>
          📍 {booking.tour_id.city}
         </Typography>
         <Divider sx={{ my: 1 }} />
         <Typography>
          <strong>Guide:</strong> {booking.guide_id.fullName.firstName} {booking.guide_id.fullName.lastName}
         </Typography>
         <Typography>
          <strong>Visitors:</strong> {booking.number_visitors}
         </Typography>
         <Typography>
          <strong>Date:</strong> {new Date(booking.start_tour).toLocaleDateString()}
         </Typography>
         <Typography>
          <strong>Time:</strong> {booking.time.start_time} - {booking.time.end_time}
         </Typography>
         <Typography variant="body2" mt={1} color="text.secondary">
          Created: {new Date(booking.createAt).toLocaleDateString()}
         </Typography>
         <Typography
          variant="body2"
          mt={2}
          sx={{
           color: '#2e7d32',
           backgroundColor: '#e8f5e9',
           p: 1.2,
           borderRadius: 2,
           fontWeight: 500,
           fontSize: '0.9rem',
          }}
         >
          📞 We are calling before 1 day — get ready for the enjoyment!
         </Typography>
        </CardContent>
       </Card>
      </Grid>
     ))}
    </Grid>
   )}
  </Box>
 );
};

export default Booked;

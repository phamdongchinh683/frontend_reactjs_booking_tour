import {
 Box,
 Button,
 Card,
 CardContent,
 CardMedia,
 Grid,
 Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import GradientCircularProgress from '../../components/GradientCircularProgress';
import { AuthService } from '../../services';
import ImageTour from '../Tour/Components/ImageTour';

const TourDetail = () => {
 const { id } = useParams();
 const { detailTourById } = AuthService();
 const [data, setData] = useState(null);
 const navigate = useNavigate();
 const detailTour = async () => {
  try {
   const response = await detailTourById(id);
   setData(response.data.data);
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  detailTour();
 }, [id]);

 if (!data) {
  return <GradientCircularProgress />
 }

 const city = data.city;
 const attraction = data.attractions;
 const days = data.days;

 return (
  <Card sx={{ maxWidth: 1000, margin: 'auto', mt: 5, boxShadow: 4, borderRadius: 3 }}>
   <Grid container spacing={0}>
    <Grid item xs={12} md={6}>
     <CardMedia sx={{ px: 2, pt: 2 }}>
      {data.images && data.images.length > 1 ? (
       <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
       >
        {data.images.map((image, index) => (
         <Box key={index} sx={{ px: 1 }}>
          <ImageTour
           publicId={image}
           height={600}
           sx={{
            width: '100%',
            height: 500,
            objectFit: 'cover',
            borderRadius: 2,
           }}
          />
         </Box>
        ))}
       </Slider>
      ) : (
       <Box sx={{ px: 1 }}>
        <ImageTour
         publicId={data.images[0]}
         sx={{
          width: '100%',
          height: 300,
          objectFit: 'cover',
          borderRadius: 2,
         }}
        />
       </Box>
      )}
     </CardMedia>
    </Grid>

    <Grid item xs={12} md={6}>
     <CardContent sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
       {city}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
       Attractions: {attraction}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
       Duration: <strong>{days}</strong> days
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
       Price (Adult): <strong>${data.prices?.adult}</strong>
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
       Price (Child): <strong>${data.prices?.child}</strong>
      </Typography>

      <Box mt={2}>
       <Typography variant="subtitle2" color="text.secondary">
        Tour Guide:
       </Typography>
       <Typography variant="body1" fontWeight={500}>
        {data.guide?.fullName?.firstName} {data.guide?.fullName?.lastName}
       </Typography>
      </Box>

      <Box mt={4}>
       <Button
        variant="contained"
        size="large"
        sx={{
         backgroundColor: '#1976d2',
         textTransform: 'none',
         borderRadius: 2,
         px: 4,
         py: 1.5,
         fontWeight: 500,
         '&:hover': {
          backgroundColor: '#1565c0',
         },
        }}
        onClick={() =>
         navigate(`/tour/${data._id}/book`, {
          state: { prices: data.prices }
         })
        }
       >
        Book Now
       </Button>
      </Box>
     </CardContent>
    </Grid>
   </Grid>

   <Box px={4} pb={4}>
    <Box mt={4}>
     <Typography variant="h6" gutterBottom>
      Description
     </Typography>
     <Typography variant="body2" color="text.secondary">
      Discover the hidden charm of <strong>{city}</strong> in this {days}-day journey. Visit the iconic{" "}
      <strong>{attraction}</strong> and immerse yourself in the culture, history, and natural beauty this
      destination has to offer. This tour is perfect for families, couples, and solo travelers looking for a
      peaceful yet enriching experience.
     </Typography>
    </Box>

    <Box mt={4}>
     <Typography variant="h6" gutterBottom>
      What’s Included
     </Typography>
     <ul style={{ paddingLeft: '1.25rem', color: 'gray' }}>
      <li>Entrance fees to all attractions</li>
      <li>Professional local tour guide</li>
      <li>Meals during the tour</li>
      <li>Air-conditioned transport</li>
      <li>Hotel accommodation</li>
     </ul>
    </Box>

    <Box mt={4}>
     <Typography variant="h6" gutterBottom>
      Highlights
     </Typography>
     <ul style={{ paddingLeft: '1.25rem', color: 'gray' }}>
      <li>Guided visit to {attraction}</li>
      <li>Explore cultural and historic sites around {city}</li>
      <li>Local food tasting experiences</li>
      <li>Photo stops at scenic viewpoints</li>
     </ul>
    </Box>

    <Box mt={4} p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
     <Typography variant="h6" gutterBottom>
      Travel Tips
     </Typography>
     <Typography variant="body2" color="text.secondary">
      Don’t forget to bring your camera and comfortable walking shoes! The best time to explore {city} is in
      the early morning or late afternoon for cooler weather and softer light.
     </Typography>
    </Box>
   </Box>
  </Card>
 );
};

export default TourDetail;

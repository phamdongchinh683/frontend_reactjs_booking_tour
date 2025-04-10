import { Box, Button, CardContent, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Booking } from '../../../../models/Booking';
import { AuthService } from '../../../../services';
import { validateCardNumber, validateDateField, validateGuideId } from '../../../../utils';
import CardInput from '../CardInput';
import GuideSelector from '../GuideSelector';
import ScheduleFields from '../ScheduleFields';
import VisitorInfo from '../VisitorInfo';
import Notification from '../../../../components/Notification';

const BookingForm = () => {
 const { id } = useParams();
 const location = useLocation();
 const prices = location.state?.prices || { adult: 100, child: 50 };
 const navigate = useNavigate();
 const { getGuides, bookTour } = AuthService();

 const [formData, setFormData] = useState({
  guideId: '',
  adult: 1,
  child: 0,
  startDate: '',
  startTime: '',
  endTime: '',
  status: 0,
  cardNumber: '',
 });

 const [guides, setGuides] = useState([]);
 const [errors, setErrors] = useState({});

 const totalVisitors = Number(formData.adult) + Number(formData.child);
 const totalAmount = Number(formData.adult) * prices.adult + Number(formData.child) * prices.child;

 useEffect(() => {
  const fetchGuides = async () => {
   try {
    const response = await getGuides();
    if (response.data.status === 'success') {
     setGuides(response.data.data);
    }
   } catch (error) {
    console.error('Failed to fetch guides:', error);
   }
  };
  fetchGuides();
 }, []);

 const handleChange = (e) => {
  const { name, value } = e.target;
  const val = Number(value);
  if ((name === 'adult' || name === 'child') && val < 0) return;

  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const validateForm = () => {
  const newErrors = {
   guideId: validateGuideId(formData.guideId),
   startDate: validateDateField(formData.startDate, 'Start date'),
   cardNumber: validateCardNumber(formData.cardNumber),
  };
  setErrors(newErrors);
  return Object.values(newErrors).every((err) => err === '');
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const data = new Booking(
   formData.guideId,
   totalVisitors,
   formData.startDate,
   formData.startTime,
   formData.endTime,
   formData.status,
   formData.cardNumber,
   totalAmount
  );

  try {
   const response = await bookTour(data, id);
   if (response.data.status === 'success') {
    navigate('/booked');
   }
  } catch (error) {
   console.error(error);
  }
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <CardContent>
     <Box display="flex" flexDirection="column" gap={5}>
      <Grid container spacing={2}>
       <GuideSelector
        guideId={formData.guideId}
        onChange={handleChange}
        guides={guides}
        error={errors.guideId}
       />

       <VisitorInfo
        adult={formData.adult}
        child={formData.child}
        prices={prices}
        onChange={handleChange}
       />

       <ScheduleFields
        startDate={formData.startDate}
        startTime={formData.startTime}
        endTime={formData.endTime}
        onChange={handleChange}
        errors={{ startDate: errors.startDate }}
       />
      </Grid>
      <CardInput
       cardNumber={formData.cardNumber}
       onChange={handleChange}
       error={errors.cardNumber}
      />
      <Box display="flex" justifyContent="center">
       <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{
         px: 4,
         py: 1.5,
         fontWeight: 600,
         borderRadius: 2,
         textTransform: 'none',
         backgroundColor: '#1976d2',
         '&:hover': {
          backgroundColor: '#125ea7',
         },
        }}
       >
        Submit Booking
       </Button>
      </Box>
     </Box>
    </CardContent>
   </form>
  </>
 );
};

export default BookingForm;

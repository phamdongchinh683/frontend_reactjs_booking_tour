import {
 Avatar,
 Box,
 Card,
 CardContent,
 Container,
 Divider,
 Grid,
 Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import GradientCircularProgress from '../../components/GradientCircularProgress';
import { AuthService } from '../../services';

const Profile = () => {
 const { profile } = AuthService();
 const [user, setUser] = useState(null);
 const detailUser = async () => {
  try {
   const response = await profile();
   if (response.data.status !== 'success') {
    return;
   }
   setUser(response.data.data);
  } catch (error) {
   console.log(error);
  }
 };
 useEffect(() => {
  detailUser();
 }, []);

 console.log(user)

 const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString('en-GB', {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
  });

 if (!user) {
  return <GradientCircularProgress />;
 }

 return (
  <Container maxWidth="sm" sx={{ mt: 8 }}>
   <Card
    sx={{
     boxShadow: 6,
     borderRadius: 4,
     overflow: 'hidden',
    }}
   >
    <Box
     sx={{
      background: 'linear-gradient(135deg, #1976d2 30%, #2196f3 90%)',
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
     }}
    >
     <Avatar
      sx={{
       width: 100,
       height: 100,
       mb: 2,
       fontSize: 36,
       bgcolor: '#ffffff22',
      }}
     >
      {user.fullName.firstName[0].toUpperCase()}
     </Avatar>
     <Typography variant="h5" fontWeight={600}>
      {user.fullName.firstName} {user.fullName.lastName}
     </Typography>
     <Typography variant="body2">
      Member since {formatDate(user.createAt)}
     </Typography>
    </Box>

    <CardContent>
     <Grid container spacing={2}>
      <Grid item xs={6}>
       <Typography variant="subtitle2" color="text.secondary">
        Age
       </Typography>
       <Typography variant="body1">{user.age}</Typography>
      </Grid>
      <Grid item xs={6}>
       <Typography variant="subtitle2" color="text.secondary">
        City
       </Typography>
       <Typography variant="body1">{user.city}</Typography>
      </Grid>

      <Grid item xs={12}>
       <Divider sx={{ my: 2 }} />
      </Grid>

      <Grid item xs={12}>
       <Typography variant="subtitle2" color="text.secondary">
        Email
       </Typography>
       <Typography variant="body1">{user.contact.email}</Typography>
      </Grid>
      <Grid item xs={12}>
       <Typography variant="subtitle2" color="text.secondary">
        Phone
       </Typography>
       <Typography variant="body1">{user.contact.phone}</Typography>
      </Grid>
     </Grid>
    </CardContent>
   </Card>
  </Container>

 );
};

export default Profile;

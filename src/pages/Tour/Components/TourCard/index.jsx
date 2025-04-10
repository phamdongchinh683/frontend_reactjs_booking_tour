import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import ImageTour from '../ImageTour';

const TourCard = ({ id, adult, child, publicId, city, attractions, days, book, detail }) => {
 return (
  <Card
   sx={{
    width: '250px',
    borderRadius: 4,
    boxShadow: 3,
    padding: 1,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
     transform: 'translateY(-5px)',
     boxShadow: 6,
    },
   }}
   key={id}
  >
   <CardActionArea onClick={detail}>
    <ImageTour publicId={publicId} />
    <CardContent sx={{ paddingBottom: 0 }}>
     <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
      {city}
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
      {attractions}
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
      Địa điểm tham quan nổi tiếng bạn có thể xem chi tiết
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
      {days} days
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
      {adult}$ / Adult &nbsp;•&nbsp; {child}$ / Child
     </Typography>
    </CardContent>
   </CardActionArea>
   <CardActions sx={{ justifyContent: 'flex-end' }}>
    <Button size="small" variant="contained" color="primary" onClick={book}>
     Book Now
    </Button>
   </CardActions>
  </Card>
 );
}

TourCard.propTypes = {
 id: PropTypes.string.isRequired,
 publicId: PropTypes.string.isRequired,
 city: PropTypes.string.isRequired,
 attractions: PropTypes.string.isRequired,
 days: PropTypes.string.isRequired,
 adult: PropTypes.number.isRequired,
 child: PropTypes.number.isRequired,
 book: PropTypes.func,
 detail: PropTypes.func,
};

export default TourCard;
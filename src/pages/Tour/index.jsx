import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import GradientCircularProgress from '../../components/GradientCircularProgress';
import PaginationButtonGroup from '../../components/PaginationButtonGroup';
import { AuthService } from '../../services';
import TourCard from './Components/TourCard';
import TourSearch from './Components/TourSearch';

const Tour = () => {
 const { getTours } = AuthService();
 const [list, setList] = useState([]);
 const [loading, setLoading] = useState(false);

 const [nextCursor, setNextCursor] = useState("");
 const [prevCursor, setPrevCursor] = useState("");
 const [selectedCity, setSelectedCity] = useState("");
 const query = new URLSearchParams(useLocation().search);

 const navigate = useNavigate();

 const fetchTours = async (cursor, direction) => {
  setLoading(true);
  try {
   const page = await getTours(cursor, direction);
   setList(page.data.data.tours);
   setNextCursor(page.data.data.nextCursor);
   setPrevCursor(page.data.data.prevCursor);
  } catch (error) {
   console.error("Failed to fetch tours:", error);
  } finally {
   setLoading(false);
  }
 };


 React.useEffect(() => {
  const cursorQuery = query.get("cursor");
  const directionQuery = query.get("direction") || "next";
  if (cursorQuery) {
   fetchTours(cursorQuery, directionQuery);
  } else {
   fetchTours('', "next");
  }
 }, []);

 const pageNext = () => {
  if (nextCursor) {
   fetchTours(nextCursor, "next");
   navigate(
    `/tour?cursor=${nextCursor}&direction=next`
   );
  }
 };

 const pagePrev = () => {
  if (prevCursor) {
   fetchTours(prevCursor, "prev");
   navigate(
    `/tour?cursor=${prevCursor}&direction=prev`
   );
  }
 };

 const options = [...new Set(list.map(tour => tour.city))];

 const filterTours = list.filter((tour) => {
  const selected = selectedCity ? tour.city === selectedCity : true;
  return selected;
 });


 let propsTourSearch = {
  onSelectChange: (e) => setSelectedCity(e.target.value),
  options: options,
 }

 return (
  <>
   <h1>Tour</h1>
   <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
    <TourSearch {...propsTourSearch} />
    <PaginationButtonGroup
     onPrev={pagePrev}
     onNext={pageNext}
     prevDisabled={!prevCursor}
     nextDisabled={!nextCursor}
    />
   </Box>
   {
    loading ? (
     <Box display="flex" justifyContent="center" mt={6} >
      <GradientCircularProgress />
     </Box >
    ) : (
     <>
      <Box
       display="grid"
       gridTemplateColumns="repeat(5, 1fr)"
       gap={2}
       marginTop={6}
      >
       {Array.from({ length: Math.ceil(filterTours.length / 5) * 5 }).map((_, idx) => {
        const tour = filterTours[idx];
        return (
         <Box key={idx}>
          {tour ? (
           <TourCard {...{
            id: idx,
            publicId: tour.images[0],
            city: tour.city,
            days: tour.days,
            attractions: tour.attractions,
            adult: tour.prices?.adult,
            child: tour.prices?.child,
            detail: () => navigate(`/tour/${tour._id}`),
           }} />
          ) : (
           <Box sx={{ height: '100%', opacity: 0 }} />
          )}
         </Box>
        );
       })}
      </Box>
     </>
    )}
  </>
 );
};

export default Tour;
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const TourSearch = ({ onSelectChange, options }) => {
 return (
  <Box display="flex" justifyContent="center" my={3}>
   <FormControl sx={{ minWidth: 250 }}>
    <InputLabel id="tour-select-label">Select Place</InputLabel>
    <Select
     labelId="tour-select-label"
     id="tour-select"
     defaultValue=""
     label="Select Place"
     onChange={onSelectChange}
    >
     {options.map((opt, index) => (
      <MenuItem key={index} value={opt}>
       {opt}
      </MenuItem>
     ))}
    </Select>
   </FormControl>
  </Box>
 );
};

TourSearch.propTypes = {
 onSelectChange: PropTypes.func.isRequired,
 options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TourSearch;

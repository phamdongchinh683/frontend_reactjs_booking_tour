import { Box, Grid, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const ScheduleFields = ({ startDate, startTime, endTime, errors, onChange }) => (
 <Grid item xs={12}>
  <Typography variant="h6" mb={1}>🕓 Schedule</Typography>

  <Box
   display="flex"
   justifyContent="center"
   alignItems="center"
   gap={2}
  >
   <TextField
    name="startDate"
    type="date"
    value={startDate}
    onChange={onChange}
    inputProps={{
     required: true,
    }} error={!!errors?.startDate}
    helperText={errors?.startDate}
    sx={{ minWidth: 200 }}
   />
   <TextField
    name="startTime"
    type="time"
    value={startTime}
    onChange={onChange}
    inputProps={{
     required: true,
     step: 300,
     min: '06:00',
     max: '22:00',
    }} sx={{ minWidth: 200 }}
   />
   <TextField
    name="endTime"
    type="time"
    value={endTime}
    onChange={onChange}
    inputProps={{
     required: true,
     step: 300,
     min: '06:00',
     max: '22:00',
    }} sx={{ minWidth: 200 }}
   />
  </Box>
 </Grid>
);

ScheduleFields.propTypes = {
 startDate: PropTypes.string.isRequired,
 startTime: PropTypes.string.isRequired,
 endTime: PropTypes.string.isRequired,
 errors: PropTypes.object,
 onChange: PropTypes.func.isRequired,
};

export default ScheduleFields;
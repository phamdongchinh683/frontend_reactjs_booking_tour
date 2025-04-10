import { Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CardInput = ({ cardNumber, error, onChange }) => (
 <Grid item xs={12}>
  <TextField
   name="cardNumber"
   label="Card Number"
   value={cardNumber}
   onChange={onChange}
   error={!!error}
   helperText={error}
   fullWidth
  />
 </Grid>
);

CardInput.propTypes = {
 cardNumber: PropTypes.string.isRequired,
 error: PropTypes.string,
 onChange: PropTypes.func.isRequired,
};

export default CardInput;

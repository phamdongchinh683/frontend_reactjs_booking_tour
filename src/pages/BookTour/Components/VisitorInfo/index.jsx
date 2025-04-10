import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import {
  Box,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const VisitorInfo = ({ adult, child, prices, onChange }) => {
  const total = Number(adult) + Number(child);
  const totalAmount = adult * prices.adult + child * prices.child;

  return (
    <Grid item xs={12}>
      <Typography variant="h6" mb={2}>Visitor Info</Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <TextField
          name="adult"
          label={`Adults ($${prices.adult})`}
          type="number"
          value={adult}
          inputProps={{ min: 0 }}
          onChange={onChange}
          sx={{ minWidth: 200 }}
        />
        <TextField
          name="child"
          label={`Children ($${prices.child})`}
          type="number"
          value={child}
          inputProps={{ min: 0 }}
          onChange={onChange}
          sx={{ minWidth: 200 }}
        />
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ minWidth: 200 }}
        >
          <PeopleIcon />
          <Typography>{total} Visitors</Typography>
          <AttachMoneyIcon />
          <Typography>${totalAmount}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

VisitorInfo.propTypes = {
  adult: PropTypes.number.isRequired,
  child: PropTypes.number.isRequired,
  prices: PropTypes.shape({
    adult: PropTypes.number,
    child: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VisitorInfo;

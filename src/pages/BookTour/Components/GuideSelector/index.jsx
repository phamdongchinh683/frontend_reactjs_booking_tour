import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from '@mui/material';

const GuideSelector = ({ guideId, guides, onChange, error }) => (
  <Grid item xs={12} width={150}>
    <FormControl fullWidth error={!!error}>
      <InputLabel>Guide</InputLabel>
      <Select name="guideId" value={guideId} onChange={onChange} label="Guide">
        {guides.map((guide) => (
          <MenuItem key={guide._id} value={guide._id}>
            {guide.fullName.firstName + ' ' + guide.fullName.lastName}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </FormControl>
  </Grid>
);

GuideSelector.propTypes = {
  guideId: PropTypes.string.isRequired,
  guides: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default GuideSelector;

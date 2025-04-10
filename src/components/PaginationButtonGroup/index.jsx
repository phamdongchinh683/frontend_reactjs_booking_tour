import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const PaginationButtonGroup = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
 return (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2}}>
   <Button
    variant="contained"
    onClick={onPrev}
    disabled={prevDisabled}
    color="primary"
   >
    Previous
   </Button>
   <Button
    variant="contained"
    onClick={onNext}
    disabled={nextDisabled}
    color="primary"
   >
    Next
   </Button>
  </Box>
 );
};

PaginationButtonGroup.propTypes = {
 onPrev: PropTypes.func.isRequired,
 onNext: PropTypes.func.isRequired,
 prevDisabled: PropTypes.bool,
 nextDisabled: PropTypes.bool,
};

PaginationButtonGroup.defaultProps = {
 prevDisabled: false,
 nextDisabled: false,
};

export default PaginationButtonGroup;

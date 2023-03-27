
import React, { FC } from 'react';
import Paper from '@mui/material/Paper';


const ResumePreviewer: FC = (props) => {
  return (
    <Paper
      variant="outlined"
      elevation={8}
      sx={{
        width: '100%',
        height: '100%',
        aspectRatio: '1/1.41'
      }}
    />
  );
}

export default ResumePreviewer;

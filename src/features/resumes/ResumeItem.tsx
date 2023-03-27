
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ResumePreviewer from 'features/resumes/ResumePreviewer';


interface ResumeItemProps {
  id: number;
  title: string;
  updatedOn: string;
}

const ResumeItem: FC<ResumeItemProps> = ({ title, updatedOn }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' }
      }}
    >
      <Box
        sx={{
          width: { xs: 141, md: 198 },
          height: { xs: 198, md: 280 },
          mr: 4
        }}
      >
        <ResumePreviewer />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start'
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary" sx={{mb: 2}}>
          Updated on {updatedOn}
        </Typography>

        <Button variant="text" size="small" color="inherit" startIcon={<EditIcon color='primary' />}>Edit</Button>
        <Button variant="text" size="small" color="inherit" startIcon={<DownloadIcon color='primary' />}>Download PDF</Button>
        <Button variant="text" size="small" color="inherit" startIcon={<ShareIcon color='primary' />}>Share Link</Button>
        <Button variant="text" size="small" color="inherit" startIcon={<ContentCopyIcon color='primary' />}>Duplicate</Button>
        <Button variant="text" size="small" color="inherit" startIcon={<DeleteOutlineIcon color='primary' />}>Delete</Button>
      </Box>
    </Box>
  );
}

export default ResumeItem;


import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import ResumeItem from 'features/resumes/ResumeItem';

interface Resume {
  id: number;
  title: string;
  updatedOn: string;
}

const Dashboard: FC = (): JSX.Element => {

  const resumeList: Array<Resume> = [
    {
      id: 1,
      title: 'My Resume1',
      updatedOn: '2023 Mar'
    },
    {
      id: 2,
      title: 'My Resume222',
      updatedOn: '2023 Jan'
    },
    {
      id: 3,
      title: 'A name',
      updatedOn: '2022 Dec'
    }
  ]

  return (
    <>
      <Box 
        sx={{
          width: '100%',
          mx: 4,
          my: 4,
          bgcolor: 'background.paper'
        }}
      >
        {/* Headers */}
        <Box>
          <Grid container alignItems={'center'} justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Resumes
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<AddIcon />}>Create Resume</Button>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Manage your resumes
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ mt: 3, mb: 6, mx: 0 }} />

        {/* Resume List */}
        <Grid
          container
          // spacing={2}
          rowSpacing={8}
          columnSpacing={4}
          columns={16}
        >
          {resumeList.map(item => 
            <Grid item xs={16} sm={8}>
              <ResumeItem
                id={item.id}
                title={item.title}
                updatedOn={item.updatedOn}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;

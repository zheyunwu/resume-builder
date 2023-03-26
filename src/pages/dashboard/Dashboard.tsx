
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';


export default function Dashboard() {

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems={'center'} justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Resumes
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<AddIcon />}>Create New Resume</Button>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Manage all your resumes
          </Typography>
        </Box>

        <Divider variant="middle" />

        <Grid
          container
          // spacing={2}
          rowSpacing={2}
          columnSpacing={2}
          columns={16}>

          <Grid item xs={8}>
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

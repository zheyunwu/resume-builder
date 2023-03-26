
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/Navbar'
import Container from '@mui/material/Container';

export default function AppLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ maxWidth: '1120px' }}>
        <Outlet />
      </Container>
    </>
  );
}

import { AppBar, Toolbar, Typography } from "@mui/material"
import CameraIcon from '@mui/icons-material/Camera';

const Navbar = () => {
  return (
    <div>
         <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Snapshot.IO
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
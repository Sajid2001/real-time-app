import { AppBar, Toolbar, Typography } from "@mui/material"
import CameraIcon from '@mui/icons-material/Camera';

const Navbar = () => {

  const font = "'Kanit', sans-serif"

  return (
    <div>
         <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography fontWeight={'light'} fontFamily={font} variant="h5" color="inherit" noWrap>
            Snapshot.io
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
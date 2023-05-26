import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navibar = () => {
  return (
    <div>
        <AppBar >
            <Toolbar>
                <Typography sx = {{ flexGrow: 1}} align='left ' color='black' variant='h6' >Home</Typography>
                <Button variant="contained"> <Link to={'/stud'} style={{textDecoration:"none" ,color:"white"}} >Student</Link></Button>
                <Button variant="contained"> <Link to={'/entr'} style={{textDecoration:"none" ,color:"white"}} >Entry</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navibar
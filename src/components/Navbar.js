import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react'
import { Link as Scroll } from 'react-scroll';
// import name from './picture/c5f3e1c3167b7d11b72d9a9d5a64ef7e.png'
const useStyle = makeStyles((theme)=>({
    logLg:{
        display: "none",
        [theme.breakpoints.up('sm')]:
        {
            display:"block",
        }
    },
    logSm:{
        display: "block",
        [theme.breakpoints.up('sm')]:
        {
            display:"none",
        }
    },
    buttons:{
        marginLeft: 'auto',
        display: "none",
        alignItems:"right",
        [theme.breakpoints.up('sm')]:
        {
            display:"block",
        }
    },
    appbar:{
        background: "none",
        fontFamily: 'Nunito',
    }
}))

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
const Navbar = () => {
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <AppBar className = {classes.appbar} elevation = {0}>
             <Toolbar>
                <IconButton edge="start" className={classes.logSm} color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Button href = "/">
                        Home
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button href = "/aboutme">
                        About Me
                    </Button>
                    </MenuItem>
                    {/* <MenuItem onClick={handleClose}>
                        <Button href = "/project">
                        Projects
                    </Button> */}
                    {/* </MenuItem> */}
                    <MenuItem onClick={handleClose}>
                        <Button href = "/contact">
                        Contacts
                    </Button>
                    </MenuItem>
                </Menu>
                 <Typography variant = "h5" className = {classes.logLg} fontFamily = 'Nunito'>
                     Jieshu Huang
                 </Typography>
                 {/* <img src={name} alt="name" height={50} width={150}/> */}
                 {/* <h1>Jieshu Huang</h1> */}
                 <div className = {classes.buttons}>
                    <IconButton edge="start" color="inherit" aria-label="menu" href="/">
                        <HomeIcon color= "inherit"/>
                    </IconButton>
                    
                    <Scroll to="aboutme" smooth={true}>
                        <Button color="inherit">
                            About Me
                        </Button> 
                    </Scroll>
                    
                    {/* <Button href = "/project" color="inherit">
                        Projects
                    </Button> */}
                    {/* <Button href = "/contact" color="inherit">
                        Contacts
                    </Button> */}
                    <Scroll to="contact" smooth={true}>
                        <Button color="inherit">
                            Contacts
                        </Button> 
                    </Scroll>
                 </div>
                 
                </Toolbar>
        </AppBar>
       
    )
}

export default Navbar

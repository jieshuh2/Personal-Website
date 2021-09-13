import { Collapse, makeStyles, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
// import bg from './picture/wp2390549.jpg'
const style = makeStyles((theme)=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    colorText: {
        color: '#4aedc4',
    },
    title: {
        color: "#fff",
        fontSize: "4rem"
    },
    container: {
        textAlign:"center"
    },
    goDown: {
        color: '#4aedc4',
        fontSize: "5rem"
    }
   
}))
const Home = () => {
    const classes = style();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="home">
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                <h1 className={classes.title}>
                    Nice to meet you <br />
                    I am <span className={classes.colorText}>Jieshu Huang</span>
                </h1>
                <Scroll to="aboutme" smooth={true}>
                    <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
                </div>
            </Collapse>
            </div>
    )
}
export default Home


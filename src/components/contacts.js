import { makeStyles, Grid, Typography, Link} from '@material-ui/core'
import React from 'react'
import useWindowPosition from './hook/useWindowPosition'
const style = makeStyles((theme)=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: "#fff",
    },
    container: {
        textAlign:"left",
        fontFamily: 'Nunito',
    },
    godown: {
        color: "#5AFF3D",
        fontSize: "4rem"
    }
}))
const Contacts = () => {
    const classes = style()
    const checked = useWindowPosition('home');
    return (
        <div id="contact" className={classes.root}>
            {/* <img className = {classes.photo}src={photo} alt="photo" />
            <div className={classes.container}>
                <h4 className={classes.title}>About Me:</h4>
                <p>
                    I am a currently a junior students of UIUC. I am studying computer scince.
                </p>
            </div> */}
            <div className = {classes.container}>
            <Grid  container spacing={2}>
                <Grid item xs={10} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                            Contact:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Email: jieshuh2@illinois.edu
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                OR jessica_20001020@163.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Contacts


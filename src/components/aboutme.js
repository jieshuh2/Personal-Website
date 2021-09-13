import { makeStyles, Grid, Typography, Link} from '@material-ui/core'
import React from 'react'
import useWindowPosition from './hook/useWindowPosition'
import photo from './photo2.jpg'
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
    },
    photo: {
        height: 280,
        width: 210,
    }
}))

const Aboutme = () => {
    const classes = style()
    const checked = useWindowPosition('home');
    return (
        <div id="aboutme" className={classes.root}>
            {/* <img className = {classes.photo}src={photo} alt="photo" />
            <div className={classes.container}>
                <h4 className={classes.title}>About Me:</h4>
                <p>
                    I am a currently a junior students of UIUC. I am studying computer scince.
                </p>
            </div> */}
            <div className = {classes.container}>
            <Grid  container spacing={2}>
                <Grid item>
                    <img className = {classes.photo}src={photo} alt="photo" />
                </Grid>
                <Grid item xs={10} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                            About Me:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I am currently a junior student of University of Illinois at Urbana Champaign(UIUC) studying Computer Science.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I also love design, architecture, music and cats.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                GitHub:  <Link href="https://github.com/jieshuh2"color="inherit"> https://github.com/jieshuh2</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Linkin:<Link href="https://www.linkedin.com/in/%E6%9D%B0%E5%A7%9D-%E9%BB%84-1b5339201/" color="inherit"> https://www.linkedin.com/in/%E6%9D%B0%E5%A7%9D-%E9%BB%84-1b5339201/</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Aboutme


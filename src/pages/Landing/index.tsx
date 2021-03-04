import React, { useEffect, useState } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, TextField, Fab, Snackbar, Switch, FormControlLabel } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

import { animateScroll } from "react-scroll";

import ToDo from '../../components/Item';
import Alert from '../../components/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        }
    }),
);

interface LandingProps {
    changeTheme: Function
    isThemeDark: boolean
}

const Landing: React.FC<LandingProps> = (props: LandingProps) => {
    const [items, setItem] = useState([]);
    const [task, setTask] = useState("");

    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const addItem = () => {
        if (task === '') {
            setOpenAlertError(true);
            setAlertMessage("Text field is empty.");
        }
        else if (items.indexOf(task) != -1) {
            setOpenAlertError(true);
            setAlertMessage("Duplicate task");
        }
        else {
            setItem(items => [...items, task]);
            setTask("");
            setOpenAlertSuccess(true);
            setAlertMessage("Taks added successfully.");
            return;
        }
    };

    const classes = useStyles();

    useEffect(() => {
        animateScroll.scrollToBottom({
            containerId: "items-list"
        });
    }, [items]);


    return (
        <div className={classes.root}>
            <Container maxWidth="md" style={{ marginTop: "14px" }} >
                <Grid container spacing={3} direction="column" justify="center">
                    <Paper component="div" className="paper" style={{ padding: "20px" }}>
                        <Grid item xs={12} container>
                            <Paper component="div" className="paper" color="secondary" >
                                <Grid container spacing={3} >
                                    <Grid item sm={8} lg={9}>
                                        <TextField placeholder="Task..." variant="outlined" fullWidth={true} color="primary" value={task} onChange={e => setTask(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab color="primary" aria-label="add" onClick={addItem}>
                                            <Add />
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            {items.length === 0 &&
                                <Alert className="pop" severity="info">Add tasks to view them in the list below</Alert>
                            }
                            {items.length >= 1 &&
                                <ul id="items-list" style={{ height: "450px", overflow: "auto", overflowX: "hidden" }}>
                                {items.map(function (item, i) {
                                    return <ToDo key={i} itemID={i.toString()} content={item} />
                                })}
                            </ul>
                            }
                            

                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch checked={props.isThemeDark} onChange={() => props.changeTheme()} name="checkedA" />}
                                label="Dark Theme"
                            />
                        </Grid>

                    </Paper>

                    <Snackbar open={openAlertError}
                        autoHideDuration={3000}
                        onClose={() => setOpenAlertError(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert onClose={() => setOpenAlertError(false)} severity="error">
                            {alertMessage}
                        </Alert >
                    </Snackbar>

                    <Snackbar open={openAlertSuccess}
                        autoHideDuration={3000}
                        onClose={() => setOpenAlertSuccess(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert onClose={() => setOpenAlertSuccess(false)} severity="success">
                            {alertMessage}
                        </Alert >
                    </Snackbar>
                </Grid>
            </Container>
        </div>
    );
}

export default Landing;
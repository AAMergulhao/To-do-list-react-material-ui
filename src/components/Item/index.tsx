import React, { useState } from 'react';

import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, createStyles, Grid, makeStyles, Paper, Theme, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        avatarColor: {
            color: theme.palette.text.secondary,
        },
        paper:{
            padding:"12px",
            backgroundColor: theme.palette.primary.main,
            color: "white"
        }
    }),
);

interface ToDoProps {
    content?: string,
    deleteToDo: Function
}

const ToDo: React.FC<ToDoProps> = (props: ToDoProps) => {
    const [animation, setAnimation] = useState("pop");
    const classes = useStyles();

    return (
        <li className={`${animation}`} >
            <Paper className={classes.paper} style={{ marginBottom: "10px" }} variant="outlined" color="primary">
                <Grid container spacing={2}>
                    <Grid item sm={2} md={2} lg={2}>
                        <Avatar variant="rounded" className={classes.avatarColor}>
                            <AssignmentIcon />
                        </Avatar>
                    </Grid>
                    <Grid item sm={8} md={8} lg={8}>
                        <p className="truncate">{props.content}</p>
                    </Grid>
                    <Grid item sm={1} md={2} lg={2}>
                        <IconButton aria-label="delete" style={{ color: "red" }} onClick={() => {
                            setAnimation("popOut");
                            setTimeout(() => { props.deleteToDo(props.content)}, 500);
                            }}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </li>
    )
}

export default ToDo;
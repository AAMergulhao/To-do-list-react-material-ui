import React from 'react';

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
            backgroundColor: theme.palette.primary.main
        },
    }),
);

interface ToDoProps {
    content?: string,
    itemID?: string
}

const ToDo: React.FC<ToDoProps> = (props: ToDoProps) => {
    const classes = useStyles();

    return (
        <li className="pop" id={props.itemID} key={props.itemID}>
            <Paper className="paper" color="secondary" style={{ marginBottom: "10px" }}>
                <Grid container spacing={2}>
                    <Grid item sm={2} lg={2}>
                        <Avatar variant="rounded" className={classes.avatarColor}>
                            <AssignmentIcon />
                        </Avatar>
                    </Grid>
                    <Grid item sm={1} lg={8}>
                        <p className="truncate">{props.content}</p>
                    </Grid>
                    <Grid item sm={1} lg={2}>
                        <IconButton aria-label="delete" style={{ color: "red" }}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </li>
    )
}

export default ToDo;
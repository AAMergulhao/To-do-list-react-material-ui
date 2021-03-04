import React, { useEffect, useRef, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, TextField, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

import ToDo from './components/Item';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }),
);



export default function App() {

  const listRef = useRef(null);

  const [items, setItem] = useState([]);

  let id = 1;
  const addItem = () => {
    let newItem = <ToDo itemID={id.toString()} content="Teste props" />
    setItem(items => [...items, newItem]);
  };

  const classes = useStyles();

  useEffect(() =>{
    listRef.current.scrollIntoView({ behavior: 'smooth' });
  })
  // const todoItems = [<ToDo/>, <ToDo/>, <ToDo/>,<ToDo/>, <ToDo/>, <ToDo/>,<ToDo/>, <ToDo/>, <ToDo/>]

  return (

    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper component="div" className="paper" color="secondary">
              <Grid container spacing={3}>
                <Grid item sm={8} lg={10}>
                  <TextField id="filled-basic" label="Tarefa" variant="outlined" fullWidth={true} color="primary" />
                </Grid>
                <Grid item xs={1}>
                  <Fab color="primary" aria-label="add" onClick={addItem}>
                    <Add />
                  </Fab>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <ul id="items-list" ref={listRef} style={{ height: "450px", overflow: "scroll" }}>
              {items}
            </ul>

          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

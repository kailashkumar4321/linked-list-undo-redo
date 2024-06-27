import React from "react";
import Actions from "./Actions";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import LinkedList from "./LinkedList";
import LinkedListView from "./LinkedListView";

const list = new LinkedList()

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#d5f3f5',
    width: "100vw",
    height: '100vh',
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  listView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "1000px",
    marginTop: "10vh"
  },
  output: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  current: {
    backgroundColor: '#90d2d6',
    minWidth: "40px",
    maxWidth: "fit-content",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px"
  },
  headings: {
    marginBottom: "3vh !important"
  }
}))
function App() {
  const classes = useStyles()
  const [current, setCurrent] = React.useState('')

  return (
    <div className={classes.root}>
      <Actions list={list} setCurrent={setCurrent} />
      <div className={classes.listView}>
        <span className={classes.output}>
          <Typography className={classes.headings}>Current State</Typography>
          <Typography className={classes.current}>{current}</Typography>
        </span>
        <LinkedListView content={list.getListItems()} curPos={list.getCurPos()} />
      </div>
    </div>
  );
}

export default App;

import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    actionMenu: {
        backgroundColor: '#90d2d6',
        marginTop: "5vh",
        display: 'flex',
        alignItems: 'center',
        borderRadius: "10px",
        width: "700px",
        justifyContent: "space-between"
    },
    input: {
        display: "flex",
        alignItems: "center"
    },
    textField: {
        width: "40px",
        height: "40px"
    }
}))

function Actions(props) {

    const classes = useStyles();
    const { list, setCurrent } = props;
    const [input, setInput] = React.useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleUndo = () => {
        list.handleUndo()
        setCurrent(list.current.item)
    }

    const handleRedo = () => {
        list.handleRedo()
        setCurrent(list.current.item)
    }

    const handleWrite = () => {
        list.handleWrite(list.current.item + input)
        setCurrent(list.current.item)
        setInput('')
    }

    return (
        <div className={classes.actionMenu}>
            <Button disabled={list.undo === null} onClick={handleUndo}>Undo</Button>
            <span className={classes.input}>
                <TextField className={classes.textField} value={input} onChange={handleInput} maxLength={1} size="small" InputProps={{ inputProps: { maxLength: 1 } }} />
                <Button disabled={!input.length} onClick={handleWrite}>Write</Button>
            </span>
            <Button disabled={list.redo === null} onClick={handleRedo}>Redo</Button>
        </div>
    )
}

export default Actions;
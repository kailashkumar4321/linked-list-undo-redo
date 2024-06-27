import { ArrowUpward, MultipleStop, Redo, Undo } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    content: {
        backgroundColor: '#90d2d6 !important',
        borderTop: '0px !important',
        minWidth: "40px",
        maxWidth: 'fit-content',
        height: "40px",
        display: "flex !important",
        alignItems: "center",
        justifyContent: "space-around",
        padding: '5px !important',
        borderRadius: "10px"
    },
    view: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: 'center',
        marginTop: "5vh",
        gap: "10px"
    },
    table: {
        width: 'fit-content'
    },
    cell: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    tableCell: {
        border: '0 !important',
        display: "flex",
        gap: '5px'
    },
    arrow: {
        position: "relative",
        top: "10px"
    }
}))

function LinkedListView(props) {
    const classes = useStyles();
    const { content = [], curPos } = props;

    return (
        <div className={classes.view}>
            {
                content.map((item, index) => {
                    return (
                        <div className={classes.tableCell}>
                            <div className={classes.cell}>
                                <Typography className={classes.content}>{item}</Typography>
                                {index === (curPos - 1) ? <Undo /> : (index === curPos ? <ArrowUpward /> : (index === (curPos + 1) && <Redo />))}
                            </div>
                            {index !== (content.length - 1) && <MultipleStop className={classes.arrow} />}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LinkedListView
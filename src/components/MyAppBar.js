/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
  appbar: {
    height: "65px",
    backgroundColor: "#5664D2",
    display: "flex",
    justifyContent: "center",
    zIndex: "9999",
  },
});

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} className={classes.appbar}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        //   id="react-admin-title"
      >
        Dashboard
      </Typography>
      <span className={classes.spacer} />
      <IconButton color="inherit">
        <Badge color="primary" variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </AppBar>
  );
};

export default MyAppBar;

import React from "react";
import classes from "./ALink.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default function Link({
  text = "",
  icon,
  onClick,
  linkRoute = "#",
}: {
  text?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  linkRoute?: string;
}) {
  const location = useLocation();
  const history = useHistory();

  return (
    <ListItem
      button
      selected={location.pathname === linkRoute}
      classes={{ root: classes.link, selected: classes.active }}
      onClick={() => {
        if (onClick) onClick();
        history.push(linkRoute);
      }}
    >
      <ListItemIcon className={`${classes.icon} ${location.pathname === linkRoute ? classes.iconWhite : ""}`}>
        {icon}
      </ListItemIcon>
      <ListItemText className={classes.text} primary={text} />
    </ListItem>
  );
}

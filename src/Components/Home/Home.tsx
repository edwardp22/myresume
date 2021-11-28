import React from "react";
import classes from "./Home.module.css";
import classesIcons from "./Icons.module.css";
import { LinkedIn } from "@material-ui/icons";
import { IconButton, Grid } from "@material-ui/core";
import { techIcons } from "./Icons";

export default function Home() {
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} md={8} alignItems="center">
        <Grid item className={classes.data}>
          <h1 className={classes.name}>Edward Peña</h1>
          <h2 className={classes.title}>Movil - Web - DeskTop Developer</h2>
          <IconButton
            size="small"
            className={classesIcons.linkedin}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/edward-abraham-peña-espinal",
                "_blank"
              )
            }
          >
            <LinkedIn fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container item xs={12} md={4} alignItems="center">
        <Grid item className={classes.data}>
          {techIcons.map((icon) => (
            <IconButton
              key={icon.alt}
              size="medium"
              onClick={() => window.open(icon.src, "_blank")}
              className={classesIcons[icon.className]}
            >
              <img src={icon.img} alt={icon.alt} width="50" height="50" />
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

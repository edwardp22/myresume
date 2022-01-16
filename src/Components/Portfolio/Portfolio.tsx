import React from "react";
import classes from "./Portfolio.module.css";
import { Grid } from "@material-ui/core";
import projects from "./Projects/Projects";
import Card from "../Common/Card/Card";

export default function Portfolio() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Portfolio</h1>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <p>
            Welcome to my online portfolio. Here you can browse through my
            projects, some personal and some collaborations to projects from
            previous employers.
          </p>
        </Grid>

        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.description.title}>
            <Card project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

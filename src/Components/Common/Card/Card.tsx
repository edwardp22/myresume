import React from "react";
import classes from "./Card.module.css";
import {
  Card as CardCore,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import Carousel from "../Carousel/Carousel";

export default function Card({
  project,
}: {
  project: {
    images: { alt: string; image: string }[];
    description: { title: string; description: string };
    links: { title: string; link: string; icon: React.ReactElement }[];
  };
}) {
  const {
    images,
    description: { title, description },
    links,
  } = project;

  return (
    <CardCore className={classes.root}>
      <Carousel items={images} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        {links.map((link) => (
          <Button
            size="small"
            color="primary"
            href={link.link}
            target="_blank"
            rel="noreferrer"
            startIcon={link.icon}
          >
            {link.title}
          </Button>
        ))}
      </CardActions>
    </CardCore>
  );
}

import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import TopBar from "../TopBar/TopBar";
import Menu from "../Menu/Menu";
import { IconButton } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 600) setIsMenuClosed(true);
    else setIsMenuClosed(false);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) setIsMenuClosed(true);
      else setIsMenuClosed(false);
    });

    return window.removeEventListener("resize", () => {
      if (window.innerWidth < 600) setIsMenuClosed(true);
      else setIsMenuClosed(false);
    });
  }, []);

  const toggleMenu = () => setIsMenuClosed((isMenuClosed) => !isMenuClosed);

  return (
    <>
      <div>
        <IconButton
          size="small"
          onClick={() =>
            window.open("https://github.com/edwardp22/myresume", "_blank")
          }
        >
          <GitHub fontSize="medium" />
        </IconButton>
      </div>

      <div id="topBar" className={classes.topBar}>
        <TopBar isMenuClosed={isMenuClosed} toggleMenu={toggleMenu} />
      </div>

      <div
        id="menu"
        className={[
          classes.menu,
          isMenuClosed ? classes.slideLeft : classes.slideRight,
        ].join(" ")}
      >
        <Menu toggleMenu={toggleMenu} />
      </div>

      <div id="container" className={classes.container}>
        {children}
      </div>
    </>
  );
}

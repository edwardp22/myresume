import React from "react";
import Link from "../ALink/ALink";
import { links } from "./Links";
import { List } from "@material-ui/core";

export default function Menu({ toggleMenu }: { toggleMenu?: () => void }) {
  const onClickedLink = (): void => (window.innerWidth < 600 && toggleMenu ? toggleMenu() : undefined);

  return (
    <List>
      {links.map((link) => (
        <Link key={link.text} text={link.text} onClick={onClickedLink} icon={link.icon} linkRoute={link.link} />
      ))}
    </List>
  );
}

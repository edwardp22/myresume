import React from "react";
import { Build, ContactMail, GroupWork, Home, LibraryBooks, Work } from "@material-ui/icons";

export const links = [
    {
        text: 'Home',
        icon: <Home /> ,
        link: '/Home'
    },
    {
        text: 'Resume',
        icon: <LibraryBooks />,
        link: '/Resume'
    },
    {
        text: 'Portfolio',
        icon: <Work />,
        link: '/Portfolio'
    },
    {
        text: 'Components',
        icon: <GroupWork />,
        link: '/Components'
    },
    {
        text: 'This Page',
        icon: <Build />,
        link: '/Page'
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        link: '/Contact'
    }
]
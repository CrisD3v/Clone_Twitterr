import React from 'react'
import { IconOption } from './IconOption';
import { Contenedor } from './Styled';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';


export const Sidebar = () => {
  return (
    <Contenedor>
        <TwitterIcon className = "Twitter-logo" />

        {/* IconOption  */}

        <IconOption Active Icon = { HomeIcon } Text = "Home" />
        <IconOption Icon = { SearchIcon } Text = "Explorar" />
        <IconOption Icon = { NotificationsNoneIcon } Text = "Notificaciones" />
        <IconOption Icon = { MailOutlineIcon } Text = "Mensaje" />
        <IconOption Primary Icon = { BookmarkBorderIcon } Text = "Marcadores" />
        <IconOption Primary Icon = { ListAltIcon } Text = "Listas" />
        <IconOption Primary Icon = { PermIdentityIcon } Text = "Perfil" />
        <IconOption Primary Icon = { MoreHorizIcon } Text = "Mas" />



        <Button variant="outlined" fullWidth > Twittear </Button>

    </Contenedor>
  )
}


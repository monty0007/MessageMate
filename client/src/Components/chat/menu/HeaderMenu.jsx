import { MoreVert } from '@mui/icons-material'
import {Box, Menu, MenuItem, styled} from '@mui/material'
import React, { useState } from 'react'

const MenuOption=styled(Box)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`

function HeaderMenu({setOpenDrawer}) {
    const [open, setOpen] = useState(false)
    const handleClose=()=>{
        setOpen(null);
    }

    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }

  return (
    <>
        <MoreVert onClick={handleClick} />
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getcontentanchorel={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  )
}

export default HeaderMenu
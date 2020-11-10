import React, { useState, useEffect } from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, Menu, MenuItem } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from "@material-ui/icons/Delete"
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  
const Import = (props) => {
    // fill out this component
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [removedItem, setRemovedItem] = useState(null);
    
    const handleClick = (index) => (event) => {
      setAnchorEl(event.currentTarget);
      setRemovedItem(index);
    };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      useEffect(() => {
        console.log(removedItem);
      }, [removedItem]);

    return (
        <>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Make</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row) => (
            <TableRow key={row.name}>
              <TableCell >{row.MakeId}</TableCell>
              <TableCell >{row.MakeName}</TableCell>
              <TableCell >
                <MoreVert onClick={handleClick} />
                <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      ></StyledMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <DeleteIcon
            onClick={(index) => props.deleteMake(removedItem, index)}
          />
        </MenuItem>
      </Menu>
        </>
    )
          }

export default Import
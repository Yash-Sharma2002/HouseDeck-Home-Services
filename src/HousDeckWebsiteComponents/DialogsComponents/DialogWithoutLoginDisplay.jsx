import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    // width: '600px'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const useStyles = makeStyles({
  LoginBeforeText: {
    color: 'grey',
    fontSize: '12px',
    marginLeft: '23px'
  },
  abc: {
    borderWidth: '0px 2px 2px 0px',
    borderStyle: 'solid',
    borderColor: '#7b7b7b',
    position: 'absolute',
    transform: 'rotate(45deg)',
    height: '8px',
    width: '3px',
    display: 'block',
    marginTop: '-4px',
    ml: 1
  }
})



const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle  {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogWithoutLoginDisplay({ open, setOpen }) {
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      fullScreen={fullScreen}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={false}
    >
      {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
      </BootstrapDialogTitle> */}
      <Box sx={{ display: 'flex', height: '450px', width: '650px' }} >
        <Box sx={{ width: '40%', background: '#f8f8f8', paddingLeft: '30px' }}>
          <img style={{ height: '100px', width: "100px", marginTop: '9rem' }} src="../logos/isLogin.png" alt="Login" />
          <Typography variant="h6" sx={{fontSize:'18px', fontWeight: '600', ml: 1 }}>Login/Signup</Typography>

          <Box sx={{
            display: 'flex',
            color: 'grey',
            fontSize: '12px',
            alignItems: 'center'
          }}>
            <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
            <Typography className={classes.LoginBeforeText}>Zero Brokerage</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            color: 'grey',
            fontSize: '12px',
            alignItems: 'center'
          }}>
            <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
            <Typography className={classes.LoginBeforeText}>Thousands of new listings daily.</Typography>

          </Box>

          <Box sx={{
            display: 'flex',
            color: 'grey',
            fontSize: '12px',
            alignItems: 'center'
          }}>
            <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
            <Typography className={classes.LoginBeforeText}>100 Cr+ Brokerage saved monthly.</Typography>
          </Box>
        </Box>
        <Box sx={{ml:5}}>
          <Box >
            <CloseIcon onClick={handleClose} sx={{ margin: '8px 0px auto 290px', cursor: 'pointer' }} />
          </Box>
          <Typography  sx={{fontSize:'18px', fontWeight: '600', ml: 1,marginTop:3 }}>Enter phone to continue</Typography>

        </Box>
      </Box>
    </BootstrapDialog>
  );
}







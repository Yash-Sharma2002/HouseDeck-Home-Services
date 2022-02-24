import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import { CitiesImg } from '../../constants/data';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    width: '600px',
  },
}));





const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
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

export default function SearchNSelect() {
  const [age, setAge] = React.useState('');

  const cityRef = React.useRef()

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  function handelSubmit(e) {
    e.preventDefault()
    const city = cityRef.current.value
    handleClose()
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth onSubmit={handelSubmit}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="City"
              // onChange={handleChange}
              onClick={handleClickOpen}
            >

              <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
                sx={{ position: 'fixed', height: '550px' }}
              >
                <BootstrapDialogTitle sx={{ fontSize: '18px', fontWeight: '600' }} id="customized-dialog-title" onClose={handleClose}>
                  Select Your City

                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                    {CitiesImg.map(data =>
                      <Box sx={{ width: '25%', textAlign: 'center', padding: '20px 0px', cursor: 'pointer' }} onClose={handelSubmit}>

                        <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                        <Typography ref={cityRef} value={data.id} sx={{ fontSize: '14px' }}>{data.name}</Typography>
                      </Box>
                    )}
                  </Box>
                </DialogContent>
              </BootstrapDialog>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>

      </Box>
    </div>
  )
}

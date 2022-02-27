import React from 'react'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CitiesImg } from '../../constants/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    // width: '600px',
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

export default function SearchNSelect({city,setCity,handleData}) {


  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:740px)');
  const mdMax = useMediaQuery('(max-width:740px)');
  const mdMin = useMediaQuery('(min-width:360px)');
  const sm = useMediaQuery('(max-width:360px)');



  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  // const [city, setCity] = React.useState("Select City")


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '2px', padding: '0px 10px', alignItems: 'center', minWidth: 100, backgroundColor: 'white', height: '50px!important' }} onClick={handleClickOpen}>

          <Box>{city}</Box>
          <Box sx={{ marginTop: 1 }}><ExpandMoreIcon /></Box>
          {xlMax && xlMin && (

            <BootstrapDialog
              fullScreen={fullScreen}
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              maxWidth={false}
              sx={{ position: 'fixed' }}
            >
              <BootstrapDialogTitle sx={{ fontSize: '18px', fontWeight: '600' }} id="customized-dialog-title" onClose={handleClose}>
                Select Your City

              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                  {CitiesImg.map(data =>
                    <>
                      <Button sx={{ width: '25%', display: 'block', color: 'black', userSelect: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', }} onClick={() => handleData(data.id)}>

                        <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                        <Typography sx={{ fontSize: '14px' }}>{data.name}</Typography>
                      </Button>
                    </>
                  )}
                </Box>
              </DialogContent>
            </BootstrapDialog>

          )}
          {!(xlMax && xlMin) && mdMax && mdMin && (

            <BootstrapDialog
              fullScreen={fullScreen}
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              maxWidth={false}
              sx={{ position: 'fixed' }}
            >
              <BootstrapDialogTitle sx={{ fontSize: '18px', fontWeight: '600' }} id="customized-dialog-title" onClose={handleClose}>
                Select Your City

              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                  {CitiesImg.map(data =>
                    <Button sx={{ width: '33%', display: 'block', color: 'black', userSelect: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', }} onClick={() => setCity(data.name)}>

                      <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                      <Typography sx={{ fontSize: '14px' }}>{data.name}</Typography>
                    </Button>
                  )}
                </Box>
              </DialogContent>
            </BootstrapDialog>

          )}
          {sm && (

            <BootstrapDialog
              fullScreen={fullScreen}
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              maxWidth={false}
              sx={{ position: 'fixed' }}
            >
              <BootstrapDialogTitle sx={{ fontSize: '18px', fontWeight: '600' }} id="customized-dialog-title" onClose={handleClose}>
                Select Your City

              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                  {CitiesImg.map(data =>
                    <Button sx={{ width: '50%', display: 'block', color: 'black', userSelect: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', }} onClick={() => setCity(data.name)}>

                      <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                      <Typography sx={{ fontSize: '14px' }}>{data.name}</Typography>
                    </Button>
                  )}
                </Box>
              </DialogContent>
            </BootstrapDialog>

          )}

          {/* 
            </Select>
          </FormControl> */}
        </Box>
      </Box>

      <Box>

      </Box>
    </div >
  )
}

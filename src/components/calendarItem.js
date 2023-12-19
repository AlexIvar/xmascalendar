import React from 'react'
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ParkIcon from '@mui/icons-material/Park';
import ForestIcon from '@mui/icons-material/Forest';
import NightlightIcon from '@mui/icons-material/Nightlight';
import StarIcon from '@mui/icons-material/Star';
import CookieIcon from '@mui/icons-material/Cookie';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CakeIcon from '@mui/icons-material/Cake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import PetsIcon from '@mui/icons-material/Pets';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import YardIcon from '@mui/icons-material/Yard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WcIcon from '@mui/icons-material/Wc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import LooksIcon from '@mui/icons-material/Looks';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import IcecreamIcon from '@mui/icons-material/Icecream';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import moment from"moment";
import Grid from '@mui/material/Grid';
//import '../src/styles/calendarItem.css'
import logo from './words.jpg'
import logo2 from './baltasito.png'
import logo3 from './baltasito2.png'
import logo4 from './avocado.png'
import './calenderItem.css'
import { height } from '@mui/system';

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.
  text.secondary,
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    backgroundColor: 'red',
    variant: "outlined",
    color: "white"
  }));


export const CalendarItem = (props) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (props) => {
        if(moment().date() >= props.numberid){
            setOpen(true);
          }
    };
    const handleClose = () => {
      setOpen(false);
    };

    console.log(props)
  return (
    <>
    <Item onClick={() => handleClickOpen(props)} elevation={3}>
    <Card sx={{background: props.cardColor, overflow: "hidden"}}>
    <Typography gutterBottom variant="h4" component="div" sx={{padding: 2, color: "#1a237e"}}>
          {props.numberid}
        </Typography>
      <CardContent sx={{textAlign: "center", overflow: "hidden"}}>
       {props.numberid === 1 ? <FavoriteIcon sx={{color: "white", width: 40, height: 50}}/> : 
        props.numberid === 2 ? <ForestIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 3 ? <CookieIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 4 ? <StarIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 5 ? <NightlightIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 6 ? <CelebrationIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 7 ? <AcUnitIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 8 ? <CakeIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 9 ? <AutoAwesomeIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 10 ? <AudiotrackIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 11 ? <FavoriteBorderIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 12 ? <FilterVintageIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 13 ? <PetsIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 14 ? <ScheduleIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 15 ? <StarBorderIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 16 ? <YardIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 17 ? <WbSunnyIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 18 ? <WcIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 19 ? <NotificationsIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 20 ? <MusicVideoIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 21 ? <LooksIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 22 ? <LightbulbIcon sx={{color: "white",width: 40, height: 50}}/> :
        props.numberid === 23 ? <LocalPizzaIcon sx={{color: "white",width: 40, height: 50}}/> :
                               <IcecreamIcon sx={{color: "white",width: 40, height: 50}}/>} 
      </CardContent>
    </Card>
    </Item>
     <BootstrapDialog
       onClose={handleClose}
       aria-labelledby="customized-dialog-title"
       open={open}
     >
       <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
       {props.cardTitle}
       </DialogTitle>
       <IconButton
         aria-label="close"
         onClick={handleClose}
         sx={{
           position: 'absolute',
           right: 8,
           top: 8,
           color: (theme) => theme.palette.grey[500],
         }}
       >
         <CloseIcon />
       </IconButton>
       <DialogContent sx={{height: "100%", overflow: "hidden", ...((props.numberid === 3 || props.numberid === 4) && { display: "flex", justifyContent: "center", alignItems: "center"})}} dividers>
       
         <Typography gutterBottom>
         {props.cardBody}
         </Typography>
         <Typography gutterBottom>
         {props.cardBody2}
         </Typography>
         <Typography gutterBottom>
         {props.cardBody3}
         </Typography>
         <Typography gutterBottom>
         {props.cardBody4}
         </Typography>
         <Typography gutterBottom>
         {props.cardBody5}
         </Typography>
         {props.numberid === 3 &&  <CookieIcon className='my-element' sx={{color: "#5d4037", width: 200, height: 300}}/>}
         {props.numberid === 4 &&  <StarIcon className='my-element' sx={{color: "#fbc02d", width: 200, height: 300}}/>}
         {props.numberid === 5 && <img src={logo} alt="Logo" />}
         {props.numberid === 6 && <img height={500} width={300} src={logo2} alt="Logo" />}
         {props.numberid === 12 && <img src={logo3} height={600} width={500} alt="Logo" />}
         {props.numberid === 19 && <img src={logo4} height={600} width={500} alt="Logo" />}
       </DialogContent>
       <DialogActions>
       </DialogActions>
     </BootstrapDialog>
     </>
  )
}

export default CalendarItem;

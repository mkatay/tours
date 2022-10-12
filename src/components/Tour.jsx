import React,{useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const Tour = ({ image, info,name, price }) => {
    const [infoPartial,setInfoPartial]=useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
      };

    useEffect(() => {
        const text50=info.slice(0,50)
        const lastSpacePos=text50.lastIndexOf(' ')
        setInfoPartial(text50.slice(0,lastSpacePos))
    },[])

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {infoPartial}...
           <Button size="small" onClick={handleOpen}>Read More</Button>
        </Typography>
      </CardContent>
      <CardActions>
        <p size="small">Price: ${price}</p>
       
      </CardActions>
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {info}
          </Typography>
        </Box>
      </Modal>

    </>
  );
};

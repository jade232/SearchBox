import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '35%',
      left: '35%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      opacity: '3',
    },
  };

Modal.setAppElement('#root')

export default function MediaCard(value) {

    const[modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <p>{value.title} </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setModalIsOpen(true)}>Add to Cart</Button>
      </CardActions>
      <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false)} style={customStyles}>
        <h4>Added Successfully</h4>
        <Button size="small" onClick={() => setModalIsOpen(false)}>Close</Button>
      </Modal>
    </Card>
  );
}

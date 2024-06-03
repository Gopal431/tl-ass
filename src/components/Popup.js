import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../redux/popupSlice';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Popup = () => {
  const dispatch = useDispatch();
  const { isOpen, sectionName } = useSelector((state) => state.popup);

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{sectionName}</DialogTitle>
      <DialogContent>
        <p>This is the {sectionName} section of the face.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;

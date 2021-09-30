import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../App.css';

const FormDialog = (props) => {

   
    return(
      <Dialog
        className="dialog"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#f4ffe8",
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Cocktail Choice"}</DialogTitle>
        <DialogContent>
          {props.select} 
          {props.message}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    )
  
}

export default FormDialog
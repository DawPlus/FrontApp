import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InfoIcon from '@material-ui/icons/Info';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  
const titleStyle = {
    fontSize: "15px",
    verticalAlign: "bottom"
}

const InfoContainer = (props) => {
    const {onClose, message, isOpen} = props;

    return(<>
        <Dialog
                id="warningDialog"
                open={isOpen}
                TransitionComponent={Transition}
                maxWidth="sm"
                keepMounted
                onClose={onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                     <InfoIcon color="primary" style={{ marginRight: "10px"}} />
                      <span style={titleStyle}>Info</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className="warningMessage">
                            {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" variant="contained"size="small" >
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
    
    
    
    </>);

}
export default InfoContainer;